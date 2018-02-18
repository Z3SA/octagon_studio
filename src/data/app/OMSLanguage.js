import { paths } from '../paths';
import OMSFile from '../utils/OMSFile';

export default class OMSLanguage {
    name;
    abbr;
    isCompleted;
    data;

    // Basic constructor
    constructor(_abbr, _name, _isCompleted, _data) {
        if (_abbr != null) {
            if (_name === undefined) {
                let langPath = paths.appData + paths.langsFolder + "/" + _abbr + ".json";
                let langData = OMSFile.readJSON(langPath),
                langInfo = langData.INFO;
    
                this.name = langInfo.NAME;
                this.abbr = langInfo.ABBR;
                this.isCompleted = (langInfo.IS_COMPLETED === "true") ? true : false;
                this.data = langData;
            } else {
                this.name = _name;
                this.abbr = _abbr;
                this.isCompleted = _isCompleted;
                this.data = _data;
            }
        }
    }

    static loadInfo(_abbr) {
        let langPath = paths.appData + paths.langsFolder + _abbr + ".json",
        langData = OMSFile.readJSON(langPath),
        langInfo = langData.INFO;

        return langInfo;
    }
}