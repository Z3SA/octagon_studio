import { paths } from '../paths';
import OMSFile from '../utils/OMSFile';

/* 
*  This class created for multi-language support on program. 
*  Each language package is in %APPDATA% folder of app.
*/
export default class OMSLanguage {
    name; // Full name of lang package
    abbr; // Abbr of lang package for functions
    isCompleted; // Is completed lang package or not
    data; // Content of package

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

    static loadInfo(_abbr) { // Loading lang package from file
        let langPath = paths.appData + paths.langsFolder + _abbr + ".json",
        langData = OMSFile.readJSON(langPath),
        langInfo = langData.INFO;

        return langInfo;
    }
}