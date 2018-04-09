import { paths } from '../paths';
import OMSFile from '../utils/OMSFile';

/* 
*  This class allows to save some data before closing of program.
*  This data: position and size of window, last project, version of last launched build
*/
export default class OMSSession {
    winWidth: number;
    winHeight: number; // Window size
    winX: number;
    winY: number; // Window position
    project: string; // Last project in program
    lastProjects: array; // Last 5 or 10 opened projects

    constructor() {
        this.winWidth = 1200;
        this.winHeight = 700;
        this.winX = 300;
        this.winY = 300;
        
        let sessionPath = paths.appData + paths.session,
            sessionData = OMSFile.readJSON(sessionPath);

        if (sessionData.type !== "error") {
            this.winWidth = sessionData.width;
            this.winHeight = sessionData.height;
            this.winX = sessionData.x;
            this.winY = sessionData.y;
        }
    }

    static saveSession(winWidth: number, winHeight: number, winX: number, winY: number) {
        let saveSession = {
            width: this.winWidth,
            height: this.winHeight,
            x: this.winX,
            y: this.winY
        },
            sessionPath = paths.appData + paths.session;

        OMSFile.writeJSON(saveSession, sessionPath);
    }
} 