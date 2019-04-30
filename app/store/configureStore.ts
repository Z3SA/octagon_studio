import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const selectedConfigureStore =
  process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

/** Configured store of Redux */
export const { configureStore } = selectedConfigureStore;

/** History of store for Redux router */
export const { history } = selectedConfigureStore;
