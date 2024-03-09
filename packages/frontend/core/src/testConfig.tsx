import 'ses';
import '@affine/component/theme/global.css';

import { setupGlobal } from '@affine/env/global';
import { BrowserRouter } from 'react-router-dom';
// This actually does need to be an import side effect so it executes before test component gets imported
setupGlobal();

export const init = () => {
  // TODO: figure out how to import generated css... maybe we need to
  // generate a new module with import and then replace the entry points entirely
  // Maybe an inject stylesheet API?
  console.log('init');
};

export const Root = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
