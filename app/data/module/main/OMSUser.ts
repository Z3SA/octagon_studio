import paths from 'data/common/paths';
import OMSFile from 'data/utils/OMSFile';
import sha256 from 'sha256';

export default class OMSUser {
  public static saveUser(user: string, devTeam: string, platforms: any[], appKey: string) {
    const config = {
      app_key: appKey,
      user,
      dev_team: devTeam,
      platforms,
    };

    OMSFile.writeJSON(config, paths.appData + paths.user);
  }
  public user: string;

  public devTeam: string;

  public appKey: string;

  public appIsValid: boolean;

  public platforms: any[];

  constructor() {
    const currentUser = OMSFile.readJSON(paths.appData + paths.user);

    this.user = currentUser.user;
    this.devTeam = currentUser.dev_team;
    this.platforms = currentUser.platforms;
    this.appIsValid = true;

    if (currentUser.app_key === '') {
      this.createKey();
      this.saveUser();
    } else {
      this.appIsValid = currentUser.app_key === sha256(process.env.USER + process.env.APPDATA);
    }
  }

  public createKey() {
    this.appKey = sha256(process.env.USER + process.env.APPDATA);
  }

  public saveUser() {
    const config = {
      user: this.user,
      dev_team: this.devTeam,
      app_key: this.appKey,
      platforms: this.platforms,
    };

    OMSFile.writeJSON(config, paths.appData + paths.user);
  }
}
