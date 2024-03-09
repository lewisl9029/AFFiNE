import './polyfills.js';
import 'ses';
import '@affine/component/theme/global.css';
import './__generated/index.css';

import { setupGlobal } from '@affine/env/global';
import * as reactRouterDom from 'react-router-dom';
// This actually does need to be an import side effect so it executes before test component gets imported
setupGlobal();

export const init = () => {
  // TODO: figure out how to import generated css... maybe we need to
  // generate a new module with import and then replace the entry points entirely
  // Maybe an inject stylesheet API?
  console.log('init');
};

export const Root = ({ children }) => {
  return (
    <reactRouterDom.BrowserRouter>{children}</reactRouterDom.BrowserRouter>
  );
};
