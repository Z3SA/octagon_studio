import paths from 'data/common/paths.enum';
import OMSFile from 'data/utils/OMSFile';

/*
 *  This class created for multi-language support on program.
 *  Each language package is in %APPDATA% folder of app.
 */
export default class OMSLanguage {
  public static loadInfo(_abbr: string) {
    // Loading lang package from file
    const langPath = `${paths.appData + paths.langsFolder + _abbr}.json`;

    const langData = OMSFile.readJSON(langPath);

    const langInfo = langData.INFO;

    return langInfo;
  }
  public name: string;

  // Full name of lang package
  public abbr: string;

  // Abbr of lang package for functions
  public isCompleted: boolean;

  // Is completed lang package or not
  public data: any; // Content of package

  // Basic constructor
  constructor(_abbr: string, _name?: string, _isCompleted?: boolean, _data?: any) {
    if (_abbr != null) {
      if (_name === undefined) {
        const langPath = `${paths.appData + paths.langsFolder}/${_abbr}.omslang`;
        const langData = OMSFile.readJSON(langPath);

        const langInfo = langData.INFO;

        this.name = langInfo.NAME;
        this.abbr = langInfo.ABBR;
        this.isCompleted = langInfo.IS_COMPLETED === 'true';
        this.data = langData;
      } else {
        this.name = _name;
        this.abbr = _abbr;
        this.isCompleted = _isCompleted;
        this.data = _data;
      }
    }
  }
}
