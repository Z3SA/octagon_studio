import appData from '../../common/appData';
import OMSFile from '../../utils/OMSFile.class';
import OMS_DEFAULT from './default-state/OMS.default';
import OMSConfig from './model/OMSConfig.interface';
import OMSLanguage from './OMSLanguage.class';
import OMSSession from './OMSSession.class';
import OMSUser from './OMSUser.class';

/**
 * Initial state of Studio
 * Loading is sync, savings are async
 */
export default class OMS {
  /** Version Mk * */
  public major: number;

  /** Full version (for logs and developers) */
  public version: string;

  /** Program version */
  public lang: OMSLanguage;

  /** Program build status */
  public session: OMSSession;

  /** Last session of user */
  public user: OMSUser;

  private isLoaded = false;

  constructor() {
    if (!this.isLoaded) {
      this.load();
    }
  }

  /** Loading all configs and data from app data */
  public load(): void {
    let cfg: OMSConfig;
    if (
      !OMSFile.exists(appData.folder) ||
      !OMSFile.exists(`${appData.folder}/${appData.cfg}`)
    ) {
      cfg = OMS_DEFAULT;
      OMSFile.write(`${appData.folder}/${appData.cfg}`, cfg);
    } else {
      cfg = OMSFile.readSync(`${appData.folder}/${appData.cfg}`);
    }

    this.major = cfg.major;
    this.version = cfg.version;

    OMSLanguage.checkLangsList();

    this.lang = new OMSLanguage(cfg.lang);
    this.user = new OMSUser();

    this.isLoaded = true;
  }
}
