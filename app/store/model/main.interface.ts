import { IStoreMainEnvironment } from './main/environment.interface';
import { IStoreMainModals } from './main/modals.interface';

export interface IStoreMain {
  modals: IStoreMainModals;
  environment: IStoreMainEnvironment;
}
