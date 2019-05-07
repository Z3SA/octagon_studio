import IOMSLDLogoMenu from './OMSLDLogoMenu.interface';
import IOMSLDAboutAppModal from './OMSLDAboutAppModal.interface';
import IOMSLDMainMenu from './OMSLDMainMenu.interface';
import { IOMSLDMainStart } from './OMSLDMainStart.interface';

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
