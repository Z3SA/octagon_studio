import paths from 'data/common/paths.enum';
import OMSFile from 'data/utils/OMSFile';

/*
 *  This class allows to save some data before closing of program.
 *  This data: position and size of window, last project, version of last launched build
 */
export default class OMSSession {
  public winWidth: number;

  public winHeight: number;

  // Window size
  public winX: number;

  public winY: number;

  // Window position
  public project: any;

  // Last project in program
  public lastProjects: any[]; // Last 5 or 10 opened projects

  constructor() {
    this.winWidth = 1200;
    this.winHeight = 700;
    this.winX = 300;
    this.winY = 300;

    const sessionPath = paths.appData + paths.session;

    const sessionData = OMSFile.readJSON(sessionPath);

    if (sessionData.type !== 'error') {
      this.winWidth = sessionData.width;
      this.winHeight = sessionData.height;
      this.winX = sessionData.x;
      this.winY = sessionData.y;
    }
  }

  public saveSession(): void {
    const saveSession = {
      width: this.winWidth,
      height: this.winHeight,
      x: this.winX,
      y: this.winY,
    };

    const sessionPath = paths.appData + paths.session;

    OMSFile.writeJSON(saveSession, sessionPath);
  }
}
