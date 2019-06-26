import { mainEnvironmentStates } from 'store/actions/main/environment';

/** State of environment of main window (now only type of active frame) */
export interface IStoreMainEnvironment {
  state: mainEnvironmentStates;
}
