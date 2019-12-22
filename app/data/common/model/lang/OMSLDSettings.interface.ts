import { IOMSLDSettingsLanguage } from './settings';

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
    LANGUAGE: IOMSLDSettingsLanguage;

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
