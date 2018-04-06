import { paths } from '../paths';
import OMSFile from '../utils/OMSFile';
import sha256 from 'sha256';

export default class OMSUser {
    user: string;
    devTeam: string;
    appKey: string;
    appIsValid: boolean;

    constructor() {
        let currentUser = OMSFile.readJSON(paths.appData + paths.user);

        this.user = currentUser.user;
        this.devTeam = currentUser.dev_team;
        this.appIsValid = true;

        if (currentUser.app_key === "") {
            this.createKey();
            this.saveUser();
        } else {
            this.appIsValid = (currentUser.app_key === sha256(process.env.USER + process.env.APPDATA));
        }
    }

    createKey() {
        this.appKey = sha256(process.env.USER + process.env.APPDATA);
    }

    saveUser() {
        let config = {
            user: this.user,
            dev_team: this.devTeam,
            app_key: this.appKey
        }

        OMSFile.writeJSON(config, paths.appData + paths.user);
    }

    static saveUser(user, devTeam, appKey) {
        let config = {
            user: user,
            dev_team: devTeam,
            app_key: appKey
        }

        OMSFile.writeJSON(config, paths.appData + paths.user);
    }
}