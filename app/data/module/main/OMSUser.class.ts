import appData from 'data/common/appData';
import OMSFile from 'data/utils/OMSFile.class';
import OMS_USER_DEFAULT from './default-state/OMSUser.default';
import OMSUserConfig from './model/OMSUserConfig.interface';

export default class OMSUser {
  /** Username */
  public user: string;

  /** Team of user */
  public devTeam: string;

  /** Generated key of app instance */
  public appKey: string;

  constructor() {
    if (!OMSFile.exists(`${appData.folder}/${appData.user}`)) {
      this.user = OMS_USER_DEFAULT.user;
      this.devTeam = OMS_USER_DEFAULT.dev_team;
      this.appKey = OMS_USER_DEFAULT.app_key;
      this.save();
    } else {
      const cfg: OMSUserConfig = OMSFile.readSync(`${appData.folder}/${appData.user}`);
      this.user = cfg.user;
      this.devTeam = cfg.dev_team;
      this.appKey = cfg.app_key;
    }
  }

  public save(): Promise<string> {
    const config = {
      user: this.user,
      dev_team: this.devTeam,
      app_key: this.appKey,
    };

    return OMSFile.write(`${appData.folder}/${appData.user}`, config);
  }
}
