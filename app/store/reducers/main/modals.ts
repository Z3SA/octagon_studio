import {
  IToggleModalAction,
  TOGGLE_ABOUT_APP_MODAL,
  TOGGLE_HOTKEYS_MODAL,
  TOGGLE_SETTINGS_MODAL,
} from 'store/actions/main/modals';
import { IStoreMainModals } from 'store/model/main/modals.interface';

const initialState: IStoreMainModals = {
  aboutAppVisible: false,
  settingsVisible: false,
  hotkeysVisible: false,
};

export function modalsReducer(
  state = initialState,
  action: IToggleModalAction<
    | typeof TOGGLE_ABOUT_APP_MODAL
    | typeof TOGGLE_SETTINGS_MODAL
    | typeof TOGGLE_HOTKEYS_MODAL
  >
): IStoreMainModals {
  switch (action.type) {
    case TOGGLE_ABOUT_APP_MODAL:
      return {
        ...state,
        aboutAppVisible: action.visible,
      };
    case TOGGLE_SETTINGS_MODAL:
      return {
        ...state,
        settingsVisible: action.visible,
      };
    case TOGGLE_HOTKEYS_MODAL:
      return {
        ...state,
        hotkeysVisible: action.visible,
      };
    default:
      return state;
  }
}
