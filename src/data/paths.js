import { electron } from '../preload';

export const paths = {
    appData: electron.app.getPath('appData') + "/octagon_studio/Data",
    octagonCfg: "/octagon.json"
};