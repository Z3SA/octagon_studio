import {
  IOMSLDLogoMenu,
  IOMSLDAboutAppModal,
  IOMSLDMainMenu,
  IOMSLDMainStart,
  IOMSLDMainModals,
  IOMSLDStatusbar,
} from './main-window';

export interface IOMSLDMainWindow {
  /** Dropdown of menu in app header */
  LOGO_MENU: IOMSLDLogoMenu;

  /** Modal "About app" */
  ABOUT_APP: IOMSLDAboutAppModal;

  /** Main menu */
  MAIN_MENU: IOMSLDMainMenu;

  /** Start frame */
  START_FRAME: IOMSLDMainStart;

  /** Elements of status bar */
  STATUSBAR: IOMSLDStatusbar;

  /** All modals */
  MODALS: IOMSLDMainModals;
}
