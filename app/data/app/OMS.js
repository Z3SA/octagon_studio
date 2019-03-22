import paths from '../paths';
import OMSFile from '../utils/OMSFile';
import OMSLanguage from './OMSLanguage';
import OMSSession from './OMSSession';
import OMSUser from './OMSUser';

export default class OMS {
  version;

  // Program version
  lang;

  // Current lang package
  buildStatus;

  // Program build status
  session;

  // Last session of user
  user; // Data of current user

  constructor() {
    // Loading data from octagon.json
    const octagonCfg = OMSFile.readJSON(paths.appData + paths.octagonCfg);
    this.version = octagonCfg.version || 'Mk 0';
    this.lang = new OMSLanguage(octagonCfg.lang) || new OMSLanguage('en');
    this.buildStatus = octagonCfg.buildStatus;
    this.session = new OMSSession();
    this.user = new OMSUser();
  }

  static saveConfig(version, lang, buildStatus) {
    const newConfig = {
      version,
      lang,
      buildStatus
    };

    OMSFile.writeJSON(newConfig, paths.appData + paths.octagonCfg);
  }
}
