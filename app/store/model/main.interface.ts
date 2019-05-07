import { IStoreMainModals } from './main/modals.interface';
import { IStoreMainEnvironment } from './main/environment.interface';

export interface IStoreMain {
  modals: IStoreMainModals;
  environment: IStoreMainEnvironment;
}
