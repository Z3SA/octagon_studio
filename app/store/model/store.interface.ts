import { IStoreMain } from './main.interface';
import IStoreApp from './app.interface';

export interface IStore {
  /** State of main window */
  main?: IStoreMain;

  /** Router state */
  router?: any;

  /** State of whole app */
  app?: IStoreApp;
}
