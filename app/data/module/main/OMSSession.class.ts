import appData from '../../common/appData';
import OMSFile from '../../utils/OMSFile.class';
import OMS_SESSION_DEFAULT from './default-state/OMSSession.default';
import OMSSessionConfig from './model/OMSSessionConfig.interface';

/*
 *  Last session of user in app data
 */
export default class OMSSession {
  /** Read last session from file */
  public static readSession(): OMSSessionConfig {
    return OMSFile.readSync(`${appData.folder}/${appData.session}`);
  }
  /** Width of main window */
  public winWidth: number;

  /** Height of main window */
  public winHeight: number;

  /** Position of left top corner of window on X */
  public winX: number;

  /** Position of left top corner of window on Y */
  public winY: number;

  constructor() {
    if (!OMSFile.exists(`${appData.folder}/${appData.session}`)) {
      this.winWidth = OMS_SESSION_DEFAULT.winWidth;
      this.winHeight = OMS_SESSION_DEFAULT.winHeight;
      this.winX = OMS_SESSION_DEFAULT.winX;
      this.winY = OMS_SESSION_DEFAULT.winY;
      this.saveSession();
    } else {
      const cfg = OMSSession.readSession();
      this.winHeight = cfg.winHeight;
      this.winWidth = cfg.winWidth;
      this.winX = cfg.winX;
      this.winY = cfg.winY;
    }
  }

  /**
   * Save session into file
   * @returns promise of file write
   */
  public saveSession(): Promise<string> {
    const { winWidth, winHeight, winX, winY } = this;

    return OMSFile.write(`${appData.folder}/${appData.session}`, { winHeight, winWidth, winX, winY });
  }
}
