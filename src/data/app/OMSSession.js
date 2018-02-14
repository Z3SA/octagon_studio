'use strict';

import appData from '../paths';

class OMSSession {
    props = {
        winWidth: 1300,
        winHeight: 600,
        winPosX: 0,
        winPosY: 0,
        project,
        lastProjects
    }

    static sessionFile = appData + "session.json";

    constructor() {
    }
}