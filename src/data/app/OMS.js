import {paths} from '../paths';
import OMSFile from '../utils/OMSFile';

export default class OMS {
    version = "Mk 0";
    lang = "en";
    session = null;

    constructor() {
        let octagonCfg = OMSFile.readJSON(paths.appData + paths.octagonCfg);
        console.log(octagonCfg);
        this.version = octagonCfg.version || "Mk 0";
        this.lang = octagonCfg.lang || "en"; 
    }
}