import {
  currentWorkspaceAtom,
  waitForCurrentWorkspaceAtom,
} from '@affine/core/modules/workspace';
import type { Collection, DeprecatedCollection } from '@affine/env/filter';
import { DisposableGroup } from '@blocksuite/global/utils';
import type { Workspace } from '@blocksuite/store';
import { type DBSchema, openDB } from 'idb';
import { atom } from 'jotai';
import { atomWithObservable } from 'jotai/utils';
import { Observable, of } from 'rxjs';

import type {
  CollectionsCRUD,
  CollectionsCRUDAtom,
} from '../components/page-list';
import { getUserSetting } from '../utils/user-setting';
import { getWorkspaceSetting } from '../utils/workspace-setting';
import { sessionAtom } from './cloud-user';

/**
 * @deprecated
 */
export interface PageCollectionDBV1 extends DBSchema {
  view: {
    key: DeprecatedCollection['id'];
    value: DeprecatedCollection;
  };
}

/**
 * @deprecated
 */
export interface StorageCRUD<Value> {
  get: (key: string) => Promise<Value | null>;
  set: (key: string, value: Value) => Promise<string>;
  delete: (key: string) => Promise<void>;
  list: () => Promise<string[]>;
}

/**
 * @deprecated
 */
const collectionDBAtom = atom(
  openDB<PageCollectionDBV1>('page-view', 1, {
    upgrade(database) {
      database.createObjectStore('view', {
        keyPath: 'id',
      });
    },
  })
);
/**
 * @deprecated
 */
const localCollectionCRUDAtom = atom(get => ({
  get: async (key: string) => {
    const db = await get(collectionDBAtom);
    const t = db.transaction('view').objectStore('view');
    return (await t.get(key)) ?? null;
  },
  set: async (key: string, value: DeprecatedCollection) => {
    const db = await get(collectionDBAtom);
    const t = db.transaction('view', 'readwrite').objectStore('view');
    await t.put(value);
    return key;
  },
  delete: async (key: string) => {
    const db = await get(collectionDBAtom);
    const t = db.transaction('view', 'readwrite').objectStore('view');
    await t.delete(key);
  },
  list: async () => {
    const db = await get(collectionDBAtom);
    const t = db.transaction('view').objectStore('view');
    return t.getAllKeys();
  },
}));
/**
 * @deprecated
 */
const getCollections = async (
  storage: StorageCRUD<DeprecatedCollection>
): Promise<DeprecatedCollection[]> => {
  return storage
    .list()
    .then(async keys => {
      return await Promise.all(keys.map(key => storage.get(key))).then(v =>
        v.filter((v): v is DeprecatedCollection => v !== null)
      );
    })
    .catch(error => {
      console.error('Failed to load collections', error);
      return [];
    });
};
type BaseCollectionsDataType = {
  loading: boolean;
  collections: Collection[];
};
export const pageCollectionBaseAtom =
  atomWithObservable<BaseCollectionsDataType>(
    get => {
      const currentWorkspace = get(currentWorkspaceAtom);
      if (!currentWorkspace) {
        return of({ loading: true, collections: [] });
      }

      const session = get(sessionAtom);
      const userId = session?.data?.user.id ?? null;
      const migrateCollectionsFromIdbData = async (
        workspace: Workspace
      ): Promise<Collection[]> => {
        const localCRUD = get(localCollectionCRUDAtom);
        const collections = await getCollections(localCRUD);
        const result = collections.filter(v => v.workspaceId === workspace.id);
        Promise.all(
          result.map(collection => {
            return localCRUD.delete(collection.id);
          })
        ).catch(error => {
          console.error('Failed to delete collections from indexeddb', error);
        });
        return result.map(v => {
          return {
            id: v.id,
            name: v.name,
            filterList: v.filterList,
            allowList: v.allowList ?? [],
          };
        });
      };
      const migrateCollectionsFromUserData = async (
        workspace: Workspace
      ): Promise<Collection[]> => {
        if (userId == null) {
          return [];
        }
        const userSetting = getUserSetting(workspace, userId);
        await userSetting.loaded;
        const view = userSetting.view;
        if (view) {
          const collections: Omit<DeprecatedCollection, 'workspaceId'>[] = [
            ...view.values(),
          ];
          //delete collections
          view.clear();
          return collections.map(v => {
            return {
              id: v.id,
              name: v.name,
              filterList: v.filterList,
              allowList: v.allowList ?? [],
            };
          });
        }
        return [];
      };

      return new Observable<BaseCollectionsDataType>(subscriber => {
        const group = new DisposableGroup();
        const workspaceSetting = getWorkspaceSetting(
          currentWorkspace.blockSuiteWorkspace
        );
        migrateCollectionsFromIdbData(currentWorkspace.blockSuiteWorkspace)
          .then(collections => {
            if (collections.length) {
              workspaceSetting.addCollection(...collections);
            }
          })
          .catch(error => {
            console.error(error);
          });
        migrateCollectionsFromUserData(currentWorkspace.blockSuiteWorkspace)
          .then(collections => {
            if (collections.length) {
              workspaceSetting.addCollection(...collections);
            }
          })
          .catch(error => {
            console.error(error);
          });
        subscriber.next({
          loading: false,
          collections: workspaceSetting.collections,
        });
        if (group.disposed) {
          return;
        }
        const fn = () => {
          subscriber.next({
            loading: false,
            collections: workspaceSetting.collections,
          });
        };
        workspaceSetting.setting.observeDeep(fn);
        group.add(() => {
          workspaceSetting.setting.unobserveDeep(fn);
        });

        return () => {
          group.dispose();
        };
      });
    },
    { initialValue: { loading: true, collections: [] } }
  );

export const collectionsCRUDAtom: CollectionsCRUDAtom = atom(async get => {
  const workspace = await get(waitForCurrentWorkspaceAtom);
  return {
    addCollection: (...collections) => {
      getWorkspaceSetting(workspace.blockSuiteWorkspace).addCollection(
        ...collections
      );
    },
    collections: get(pageCollectionBaseAtom).collections,
    updateCollection: (id, updater) => {
      getWorkspaceSetting(workspace.blockSuiteWorkspace).updateCollection(
        id,
        updater
      );
    },
    deleteCollection: (info, ...ids) => {
      getWorkspaceSetting(workspace.blockSuiteWorkspace).deleteCollection(
        info,
        ...ids
      );
    },
  } satisfies CollectionsCRUD;
});
