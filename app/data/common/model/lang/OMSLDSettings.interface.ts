import { IOMSLDAddLangModal } from './settings';

export interface IOMSLDSettings {
  TITLE: string;

  /** Actions buttons of modal in footer */
  BOTTOM_BTNS: {
    CANCEL: string;
    APPLY: string;
  };

  /** Left menu */
  MENU: {
    INTERFACE: string;
    AUTHORITY: string;
  };

  INTERFACE: {
    LANGUAGE: {
      TITLE: string;
      NOT_FINALLY: string;
      DESC: string;
      ADD_LANG: string;
      REFRESH_LANGS: string;
      ADD_LANG_MODAL: IOMSLDAddLangModal;
    };

    THEME: {
      TITLE: string;

      BACKGROUND_COLORS: {
        LIGHT: string;
        DARK: string;
        ADAPTIVE: string;
      };
    };
  };

  AUTHORITY: {
    USER: {
      TITLE: string;
      PLACEHOLDER: string;
      DESC: string;
    };

    DEV_TEAM: {
      TITLE: string;
      PLACEHOLDER: string;
      DESC: string;
    };
  };
}
