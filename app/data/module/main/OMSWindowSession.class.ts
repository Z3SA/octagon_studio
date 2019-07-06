import OMSFile from '../../utils/OMSFile.class';
import appData from '../../common/appData';
import { OMS_WINDOW_SESSION_DEFAULT } from './default-state';
import { IOMSWindowSessionConfig } from './model';

/**
 * Last saved params of main window (sizes, pos)
 */
export default class OMSWindowSession {
  /** Read last session from file */
  public static readSession(): IOMSWindowSessionConfig {
    return OMSFile.readSync(`${appData.folder}/${appData.windowSession}`);
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
    // TODO: On class expanding create simple session load (only window sizes and pos)
    if (!OMSFile.exists(`${appData.folder}/${appData.windowSession}`)) {
      this.winWidth = OMS_WINDOW_SESSION_DEFAULT.winWidth;
      this.winHeight = OMS_WINDOW_SESSION_DEFAULT.winHeight;
      this.winX = OMS_WINDOW_SESSION_DEFAULT.winX;
      this.winY = OMS_WINDOW_SESSION_DEFAULT.winY;
      this.saveSession();
    } else {
      const cfg = OMSWindowSession.readSession();
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

    return OMSFile.write(`${appData.folder}/${appData.windowSession}`, {
      winHeight,
      winWidth,
      winX,
      winY,
    });
  }
}
