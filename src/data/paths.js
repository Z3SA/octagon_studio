import { electron } from '../preload';

export const paths = {
    appData: electron.app.getPath('appData') + "/Octagon Modmaking Studio/Data",
    octagonCfg: "/octagon.json",
    langsFolder: "/Languages"
};