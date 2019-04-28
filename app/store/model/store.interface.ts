import { IStoreMainModals } from './main/modals.interface';

export interface IStore {
  /** State of main window */
  main: IStoreMainModals;
}
