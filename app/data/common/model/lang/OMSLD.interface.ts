import IOMSLDInfo from './OMSLDInfo.interface';
import IOMSLDMainWindow from './OMSLDMainWindow.interface';

// OMSLD = OMSLangData

export default interface IOMSLD {
  /** Technical info about language pack */
  INFO: IOMSLDInfo;

  /** Main window */
  MAIN_WINDOW: IOMSLDMainWindow;
}
