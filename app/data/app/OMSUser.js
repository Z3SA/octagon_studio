import sha256 from 'sha256';
import paths from '../paths';
import OMSFile from '../utils/OMSFile';

export default class OMSUser {
  user;

  devTeam;

  appKey;

  appIsValid;

  platforms;

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
      this.appIsValid =
        currentUser.app_key === sha256(process.env.USER + process.env.APPDATA);
    }
  }

  createKey() {
    this.appKey = sha256(process.env.USER + process.env.APPDATA);
  }

  saveUser() {
    const config = {
      user: this.user,
      dev_team: this.devTeam,
      app_key: this.appKey,
      platforms: this.platforms
    };

    OMSFile.writeJSON(config, paths.appData + paths.user);
  }

  static saveUser(user, devTeam, platforms, appKey) {
    const config = {
      app_key: appKey,
      user,
      dev_team: devTeam,
      platforms
    };

    OMSFile.writeJSON(config, paths.appData + paths.user);
  }
}
