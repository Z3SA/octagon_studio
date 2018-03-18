import {paths} from '../paths';
import OMSFile from '../utils/OMSFile';
import OMSLanguage from './OMSLanguage';

export default class OMS {
    version; // Program version
    lang; // Current lang package
    buildStatus; // Program build status

    constructor() { // Loading data from octagon.json
        let octagonCfg = OMSFile.readJSON(paths.appData + paths.octagonCfg);
        this.version = octagonCfg.version || "Mk 0";
        this.lang = new OMSLanguage(octagonCfg.lang) || new OMSLanguage("en");
        this.buildStatus = octagonCfg.buildStatus;
    }
}