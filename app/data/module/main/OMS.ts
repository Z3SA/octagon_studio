import paths from 'data/common/paths.enum';
import OMSFile from 'data/utils/OMSFile';
import OMSLanguage from './OMSLanguage';
import OMSSession from './OMSSession';
import OMSUser from './OMSUser';

export default class OMS {
  public version: string;

  // Program version
  public lang: OMSLanguage;

  // Current lang package
  public buildStatus: string;

  // Program build status
  public session: OMSSession;

  // Last session of user
  public user: OMSUser; // Data of current user

  constructor() {
    // Loading data from octagon.json
    const octagonCfg = OMSFile.readJSON(paths.appData + paths.octagonCfg);
    this.version = octagonCfg.version || 'Mk 0';
    this.lang = new OMSLanguage(octagonCfg.lang) || new OMSLanguage('en');
    this.buildStatus = octagonCfg.buildStatus;
    this.session = new OMSSession();
    this.user = new OMSUser();
  }

  public saveConfig(version: string, lang: string, buildStatus: string): void {
    const newConfig = {
      version,
      lang,
      buildStatus,
    };

    OMSFile.writeJSON(newConfig, paths.appData + paths.octagonCfg);
  }
}
