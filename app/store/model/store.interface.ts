import IStoreApp from './app.interface';
import { IStoreMain } from './main.interface';

export interface IStore {
  /** State of main window */
  main?: IStoreMain;

  /** Router state */
  router?: any;

  /** State of whole app */
  app?: IStoreApp;
}
