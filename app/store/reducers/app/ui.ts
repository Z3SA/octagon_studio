import { SET_LANGUAGE } from '../../actions/app/language';
import IStoreApp from 'store/model/app.interface';
import { ISetLanguageAction } from 'store/actions/app/language';

const initialState: IStoreApp = {
  language: 'en',
};

export function uiReducer(state = initialState, action: ISetLanguageAction): IStoreApp {
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
