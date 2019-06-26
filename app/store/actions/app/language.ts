import { languages } from './languages.enum';

export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface ISetLanguageAction {
  readonly type: typeof SET_LANGUAGE;
  readonly lang: languages;
}

export function setLanguage(lang: languages): ISetLanguageAction {
  return {
    type: SET_LANGUAGE,
    lang,
  };
}
