import { IOMSLDInfo } from './OMSLDInfo.interface';
import { IOMSLDMainWindow } from './OMSLDMainWindow.interface';
import { IOMSLDSettings } from './OMSLDSettings.interface';

// OMSLD = OMSLangData

export interface IOMSLD {
  /** Technical info about language pack */
  INFO: IOMSLDInfo;

  /** Main window */
  MAIN_WINDOW: IOMSLDMainWindow;

  /** Modal "Settings" */
  SETTINGS: IOMSLDSettings;
}
