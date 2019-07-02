import { SET_LANGUAGE } from 'store/actions/app/language';
import { ISetLanguageAction } from 'store/actions/app/language';
import IStoreAppUI from 'store/model/app/ui.interface';

const initialState: IStoreAppUI = {
  language: 'en',
};

export function uiReducer(state = initialState, action: ISetLanguageAction): IStoreAppUI {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.lang,
      };
    default:
      return state;
  }
}
