import {
  TOGGLE_ABOUT_APP_MODAL,
  IToggleAboutAppModalAction,
} from 'store/actions/main/modals';
import { IStoreMainModals } from 'store/model/main/modals.interface';

const initialState: IStoreMainModals = {
  modals: {
    aboutAppVisible: false,
  },
};

export function modalsReducer(
  state = initialState,
  action: IToggleAboutAppModalAction
): IStoreMainModals {
  switch (action.type) {
    case TOGGLE_ABOUT_APP_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          aboutAppVisible: action.visible,
        },
      };
    default:
      return state;
  }
}
