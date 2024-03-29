import {
  ISetMainEnvironmentAction,
  mainEnvironmentStates,
} from 'store/actions/main/environment';
import { SET_MAIN_ENVIRONMENT } from 'store/actions/main/environment';
import { IStoreMainEnvironment } from 'store/model/main/environment.interface';

const initialState: IStoreMainEnvironment = {
  state: mainEnvironmentStates.start,
};

export function environmentReducer(
  state = initialState,
  action: ISetMainEnvironmentAction
): IStoreMainEnvironment {
  switch (action.type) {
    case SET_MAIN_ENVIRONMENT:
      return {
        ...state,
        state: action.state,
      };
    default:
      return state;
  }
}
