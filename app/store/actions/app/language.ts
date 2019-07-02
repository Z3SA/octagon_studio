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
