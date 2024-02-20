import * as path from 'node:path';

import * as css from './build-css-bundle.mjs';

// const args = process.argv.slice(2);

const rootDirectoryFrontendCore = process.cwd();
const rootDirectory = path.join(rootDirectoryFrontendCore, '../../../');

await Promise.all([
  css.run({
    rootDirectory,
    rootDirectoryFrontendCore,
    rootDirectoryStorybook: path.join(rootDirectory, 'tests/storybook'),
    rootDirectoryFrontendComponent: path.join(
      rootDirectory,
      'packages/frontend/component'
    ),
  }),
]);
