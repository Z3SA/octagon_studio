import appData from 'data/common/appData';
import OMSFile from 'data/utils/OMSFile.class';
import { OMS_DEFAULT } from './default-state';
import { IOMSConfig } from './model';
import OMSLanguage from './OMSLanguage.class';
import OMSSession from './OMSSession.class';
import OMSUser from './OMSUser.class';

/**
 * Initial state of Studio
 * Loading is sync, savings are async
 */
export default class OMS {
  /** Paths of using files and folders */
  private static readonly PATHS = {
    appData: appData.folder,
    cfg: `${appData.folder}/${appData.cfg}`,
  };

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

  /** Build type of editor */
  public type: 'pre-alpha' | 'alpha' | 'beta' | 'dev' | 'release';

  private isLoaded = false;

  constructor() {
    if (!this.isLoaded) {
      this.load();
    }
  }

  /** Loading all configs and data from app data */
  public load(): void {
    let cfg: IOMSConfig;
    if (!OMSFile.exists(OMS.PATHS.appData) || !OMSFile.exists(OMS.PATHS.cfg)) {
      cfg = OMS_DEFAULT;
      OMSFile.write(OMS.PATHS.cfg, cfg);
    } else {
      cfg = OMSFile.readSync(OMS.PATHS.cfg);
    }

    this.major = cfg.major;
    this.version = cfg.version;
    this.type = cfg.type;

    this.lang = new OMSLanguage(cfg.lang);
    this.user = new OMSUser();

    this.isLoaded = true;
  }
}
