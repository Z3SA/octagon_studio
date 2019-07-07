import { SET_LANGUAGE, SET_LANG_LIST, ISetLangListAction } from 'store/actions/app/ui';
import { ISetLanguageAction } from 'store/actions/app/ui';
import IStoreAppUI from 'store/model/app/ui.interface';

const initialState: IStoreAppUI = {
  language: 'en',
  langList: [],
};

export function uiReducer(
  state = initialState,
  action: ISetLanguageAction | ISetLangListAction
): IStoreAppUI {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.lang,
      };
    case SET_LANG_LIST:
      return {
        ...state,
        langList: action.langList,
      };
    default:
      return state;
  }
}
