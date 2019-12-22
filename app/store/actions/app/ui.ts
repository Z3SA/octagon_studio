import { OMSLanguage } from 'data/module/main';

/** Set language of app */
export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface ISetLanguageAction {
  readonly type: typeof SET_LANGUAGE;
  readonly lang: string;
}

export function setLanguage(lang: string): ISetLanguageAction {
  return {
    type: SET_LANGUAGE,
    lang,
  };
}

/** Get cached lang list for opportunity to change lang */
export const SET_LANG_LIST = 'SET_LANG_LIST';

export interface ISetLangListAction {
  readonly type: typeof SET_LANG_LIST;
  readonly langList: OMSLanguage[];
}

export function setLangList(langList: OMSLanguage[]): ISetLangListAction {
  return {
    type: SET_LANG_LIST,
    langList,
  };
}
