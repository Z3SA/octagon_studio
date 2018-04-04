import {paths} from '../paths';
import OMSFile from '../utils/OMSFile';
import OMSLanguage from './OMSLanguage';
import OMSSession from './OMSSession';

export default class OMS {
    version: string; // Program version
    lang: string; // Current lang package
    buildStatus: string; // Program build status
    session: OMSSession; // Last session of user

    constructor() { // Loading data from octagon.json
        let octagonCfg = OMSFile.readJSON(paths.appData + paths.octagonCfg);
        this.version = octagonCfg.version || "Mk 0";
        this.lang = new OMSLanguage(octagonCfg.lang) || new OMSLanguage("en");
        this.buildStatus = octagonCfg.buildStatus;
        this.session = new OMSSession();
    }

    static saveConfig(version, lang, buildStatus) {
        let newConfig = {
            version: version,
            lang: lang,
            buildStatus: buildStatus
        }

        OMSFile.writeJSON(newConfig, paths.appData + paths.octagonCfg);
    }
}