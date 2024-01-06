import * as fs from 'node:fs';
import * as path_ from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import esbuild from 'esbuild';
import readdirp from 'readdirp';

export const run = async ({
  rootDirectory,
  rootDirectoryStorybook,
  rootDirectoryFrontendCore,
  rootDirectoryFrontendComponent,
  rootDirectoryPluginImagePreview,
}) => {
  const args = process.argv.slice(2);
  const watch = args.includes('--watch') || args.includes('-w');

  const workingDirectoryStorybook = path_.join(rootDirectoryStorybook, './src');
  const workingDirectoryFrontendCore = path_.join(
    rootDirectoryFrontendCore,
    './src'
  );
  const workingDirectoryFrontendComponent = path_.join(
    rootDirectoryFrontendComponent,
    './src'
  );
  const workingDirectoryPluginImagePreview = path_.join(
    rootDirectoryPluginImagePreview,
    './src'
  );
  const outputDirectory = path_.join(workingDirectoryStorybook, '__generated/');
  const outputDirectoryFrontendCore = path_.join(
    workingDirectoryFrontendCore,
    '__generated/'
  );
  const outputDirectoryFrontendComponent = path_.join(
    workingDirectoryFrontendComponent,
    '__generated/'
  );
  const outputDirectoryPluginImagePreview = path_.join(
    workingDirectoryPluginImagePreview,
    '__generated/'
  );

  const packageJsonStorybook = JSON.parse(
    fs.readFileSync(path_.join(rootDirectoryStorybook, 'package.json'))
  );

  const packageJsonFrontendCore = JSON.parse(
    fs.readFileSync(path_.join(rootDirectoryFrontendCore, 'package.json'))
  );
  const packageJsonFrontendComponent = JSON.parse(
    fs.readFileSync(path_.join(rootDirectoryFrontendComponent, 'package.json'))
  );
  const packageJsonPluginImagePreview = JSON.parse(
    fs.readFileSync(path_.join(rootDirectoryPluginImagePreview, 'package.json'))
  );

  const ignorePlugin = {
    name: 'ignore-imports',
    setup(build) {
      build.onLoad({ filter: /\.(svg|png|gif|jpg|jpeg|mp4)$/ }, () => ({
        contents: '',
      }));
    },
  };

  const storyPaths = (
    await readdirp.promise(workingDirectoryStorybook, {
      fileFilter: '**/**.stories.tsx',
      directoryFilter: ['!.git', '!node_modules'],
    })
  ).map(({ path }) => `./${path}`);

  console.log({ storyPaths });

  const resultPlugin = {
    name: 'result-plugin',
    setup(build) {
      build.onStart(() => {
        console.log(new Date(), 'building css bundle');
      });
      build.onEnd(async result => {
        // TODO: figure out why we're not getting any css output in for instance:
        // packages/frontend/component/src/components/app-sidebar/add-page-button/index.stories.tsx
        console.log(
          'result.outputFiles',
          result.outputFiles.filter(
            ({ path }) => path.endsWith('.css') && !path.endsWith('.css.css')
          )
        );
        // const cssOutput = result.outputFiles.find(
        //   ({ path }) => path === path_.join(workingDirectory, 'index.css')
        // );

        await Promise.all([
          // fs.promises.writeFile(
          //   path_.join(outputDirectory, 'index.css'),
          //   // vanilla extract outputs comments that seem to depend on absolute path
          //   // need to strip them for consistent output between local and ci
          //   cssOutput.text.replaceAll(
          //     /\n\/\* vanilla-extract-css-ns:.*\n/g,
          //     ''
          //   )
          // ),
          (async () => {
            const { text } = result.outputFiles.find(({ path }) =>
              path.endsWith('__virtualEntryPoint.css')
            );

            const outputPath = path_.join(
              outputDirectory,
              've',
              path_.relative(workingDirectoryStorybook, 'main.css')
            );
            await fs.promises.mkdir(path_.dirname(outputPath), {
              recursive: true,
            });
            return fs.promises.writeFile(
              outputPath,
              text
                .replaceAll(/\n\/\* vanilla-extract-css-ns:.*\n/g, '')
                // also remove comment in first line without leading line break
                .replace(/\/\* vanilla-extract-css-ns:.*\n/g, '')
            );
          })(),
          ...result.outputFiles
            .filter(
              ({ path }) =>
                path.startsWith(workingDirectoryFrontendCore) &&
                path.endsWith('.css.js')
            )
            .map(async ({ path, contents }) => {
              const outputPath = path_.join(
                outputDirectoryFrontendCore,
                've',
                path_.relative(workingDirectoryFrontendCore, path)
              );
              await fs.promises.mkdir(path_.dirname(outputPath), {
                recursive: true,
              });
              return fs.promises.writeFile(outputPath, contents);
            }),
          ...result.outputFiles
            .filter(
              ({ path }) =>
                path.startsWith(workingDirectoryFrontendComponent) &&
                path.endsWith('.css.js')
            )
            .map(async ({ path, contents }) => {
              const outputPath = path_.join(
                outputDirectoryFrontendComponent,
                've',
                path_.relative(workingDirectoryFrontendComponent, path)
              );
              await fs.promises.mkdir(path_.dirname(outputPath), {
                recursive: true,
              });
              return fs.promises.writeFile(outputPath, contents);
            }),
          ...result.outputFiles
            .filter(
              ({ path }) =>
                path.startsWith(workingDirectoryPluginImagePreview) &&
                path.endsWith('.css.js')
            )
            .map(async ({ path, contents }) => {
              const outputPath = path_.join(
                outputDirectoryPluginImagePreview,
                've',
                path_.relative(workingDirectoryPluginImagePreview, path)
              );
              await fs.promises.mkdir(path_.dirname(outputPath), {
                recursive: true,
              });
              return fs.promises.writeFile(outputPath, contents);
            }),
        ]);
        console.log(new Date(), 'built css bundles');
      });
    },
  };

  await fs.promises.mkdir(outputDirectory, { recursive: true });

  const context = await esbuild.context({
    entryPoints: [
      // path_.join(workingDirectory, 'index.tsx'),
      // path_.join(workingDirectory, './**/**.css.ts'),
      // path_.join(workingDirectory, './**/**.stories.tsx'),
      '__virtualEntryPoint',
      path_.join(workingDirectoryFrontendCore, './**/**.css.ts'),
      path_.join(workingDirectoryFrontendComponent, './**/**.css.ts'),
      path_.join(workingDirectoryPluginImagePreview, './**/**.css.ts'),
    ],
    sourcemap: false,
    bundle: true,
    // Seems like vanilla extract outputs depends on working directory
    // Keeping it at frontend root for compatibility with Vite output
    absWorkingDir: rootDirectoryStorybook,
    format: 'esm',
    allowOverwrite: true,
    platform: 'browser',
    outdir: rootDirectory,
    outbase: rootDirectory,
    minify: false,
    splitting: false,
    target: 'esnext',
    plugins: [
      ignorePlugin,
      {
        name: 'virtualEntryPointPlugin',
        setup: ({ onResolve, onLoad }) => {
          onResolve({ filter: new RegExp(`^__virtualEntryPoint$`) }, () => ({
            path: '__virtualEntryPoint',
            namespace: 'virtualEntryPoint',
          }));
          onLoad(
            {
              filter: new RegExp(`^__virtualEntryPoint$`),
              namespace: 'virtualEntryPoint',
            },
            () => ({
              contents: ['@affine/component/theme/theme.css.ts', ...storyPaths]
                .map(path => `import '${path}'`)
                .join(';'),
              resolveDir: workingDirectoryStorybook,
            })
          );
        },
      },
      // Style plugin doesn't respect esbuild externals
      // FIXME: follow https://github.com/g45t345rt/esbuild-style-plugin/pull/18
      {
        name: 'styleIgnorePlugin',
        setup: ({ onResolve, onLoad }) => {
          Object.keys({
            ...packageJsonStorybook.dependencies,
            ...packageJsonFrontendCore.dependencies,
            ...packageJsonFrontendComponent.dependencies,
            ...packageJsonPluginImagePreview.dependencies,
          })
            .filter(pkg => !pkg.startsWith('@affine/'))
            .forEach(pkg => {
              onResolve(
                {
                  filter: new RegExp(`^${pkg}/.*$`),
                  namespace: 'file',
                },
                () => ({
                  external: true,
                  sideEffects: false,
                })
              );
            });

          // We don't need css handled by esbuild now that
          // Reflame has native css modules and tailwind support
          onLoad({ filter: /\.(css)$/ }, () => ({
            contents: '',
          }));
        },
      },
      vanillaExtractPlugin({ identifiers: 'short' }),
      resultPlugin,
    ],
    external: [
      'consts:publicGraphURI',
      ...Object.keys({
        ...packageJsonStorybook.dependencies,
        ...packageJsonStorybook.devDependencies,
        ...packageJsonFrontendCore.dependencies,
        ...packageJsonFrontendCore.devDependencies,
        ...packageJsonFrontendComponent.dependencies,
        ...packageJsonFrontendComponent.devDependencies,
        ...packageJsonPluginImagePreview.dependencies,
        ...packageJsonPluginImagePreview.devDependencies,
      })
        .filter(pkg => !pkg.startsWith('@affine/'))
        .flatMap(pkg => [pkg, `${pkg}/*`]),
    ],
    write: false,
    logLevel: 'error',
  });

  if (watch) {
    // esbuild watch is actually polling based, some latency
    // could be optimized away with a custom watcher
    // https://esbuild.github.io/api/#watch
    await context.watch();
  } else {
    await context.rebuild();
    await context.dispose();
  }
};
