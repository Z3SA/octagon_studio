import IOMSLDLogoMenu from './main_window/OMSLDLogoMenu.interface';
import IOMSLDAboutAppModal from './main_window/OMSLDAboutAppModal.interface';
import IOMSLDMainMenu from './main_window/OMSLDMainMenu.interface';
import IOMSLDMainStart from './main_window/OMSLDMainStart.interface';

export default interface IOMSLDMainWindow {
  /** Dropdown of menu in app header */
  LOGO_MENU: IOMSLDLogoMenu;

  /** Modal "About app" */
  ABOUT_APP: IOMSLDAboutAppModal;

  /** Main menu */
  MAIN_MENU: IOMSLDMainMenu;

  /** Start frame */
  START_FRAME: IOMSLDMainStart;
}
