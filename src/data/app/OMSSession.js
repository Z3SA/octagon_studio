import { paths } from '../paths';
import OMSFile from '../utils/OMSFile';

export default class OMSSession {
    winWidth;
    winHeight;
    winPosTop;
    winPosLeft;
    // project;
    // lastProject;
    // lastProjects;

    constructor() {
        let sessionPath = paths.appData + paths.session,
            session = OMSFile.readJSON(sessionPath);

        if (session.type === "error") {
            this.winWidth = 1000;
            this.winHeight = 500;
        } else {
            this.winWidth = session.width;
            this.winHeight = session.height;
            this.winPosTop = session.x;
            this.winPosLeft = session.y;
        }
    }
}