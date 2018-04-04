import { paths } from '../paths';
import OMSFile from '../utils/OMSFile';
import sha256 from 'sha256';

export default class OMSUser {
    user: string;
    devTeam: string;
    appKey: string;

    constructor() {
        let currentUser = OMSFile.readJSON(paths.appData + paths.user);

        this.user = currentUser.user;
        this.devTeam = currentUser.dev_team;
        this.appKey = currentUser.app_key;
    }

    static firstLaunch() {
        let newUser = {
            user: "Octagon Studio user",
            devTeam: "",
            appKey: sha256(process.env.USER + process.env.APPDATA)
        }

        OMSFile.writeJSON(newUser, paths.appData + paths.user);
    }
}