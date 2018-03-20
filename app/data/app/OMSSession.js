import { paths } from '../paths';
import OMSFile from '../utils/OMSFile';

/* 
*  This class allows to save some data before closing of program.
*  This data: position and size of window, last project, version of last launched build
*/
export default class OMSSession {
    winWidth;
    winHeight; // Window size
    winX;
    winY; // Window position
    project; // Last project in program
    lastProjects; // Last 5 or 10 opened projects
    sessionPath = paths.appData + paths.session;

    constructor() {
        this.winWidth = 1200;
        this.winHeight = 700;
        this.winX = 300;
        this.winY = 300;
        
        let sessionData = OMSFile.readJSON(sessionPath);

        if (sessionData.type !== "error") {
            this.winWidth = sessionData.width;
            this.winHeight = sessionData.height;
            this.winX = sessionData.x;
            this.winY = sessionData.y;
        }
    }

    static saveSession(winWidth, winHeight, winX, winY) {
        let saveSession = {
            width: this.winWidth,
            height: this.winHeight,
            x: this.winX,
            y: this.winY
        };

        OMSFile.writeJSON(saveSession, sessionPath);
    }
} 