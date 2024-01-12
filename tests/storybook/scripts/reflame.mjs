import * as path from 'node:path';

import * as css from './build-css-bundle.mjs';

// const args = process.argv.slice(2);

const rootDirectoryStorybook = process.cwd();
const rootDirectory = path.join(rootDirectoryStorybook, '../../');

await Promise.all([
  css.run({
    rootDirectory,
    rootDirectoryStorybook,
    rootDirectoryFrontendCore: path.join(
      rootDirectory,
      'packages/frontend/core'
    ),
    rootDirectoryFrontendComponent: path.join(
      rootDirectory,
      'packages/frontend/component'
    ),
  }),
]);
