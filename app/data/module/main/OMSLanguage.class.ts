import appData from '../../common/appData';
import OMSFile from '../../utils/OMSFile.class';
import OMSLanguageMeta from './model/OMSLanguageMeta.interface';
import OMSLanguageTiming from './model/OMSLanguageTiming.interface';

/*
 *  This class created for multi-language support on program.
 *  Each language package is in %APPDATA% folder of app.
 */
export default class OMSLanguage {
  /** File extension of language pack */
  public static readonly EXTENSION = 'omslang';

  /**
   * Check languages list on start of editor
   */
  public static checkLangsList(): void {
    if (!OMSFile.exists(`${appData.folder}/${appData.langsFolder}`)) {
      const LANG_RU = require('assets/langs/ru.json');
      const LANG_EN = require('assets/langs/en.json');

      OMSFile.writeSync(
        LANG_RU,
        `${appData.folder}/${appData.langsFolder}/ru.${OMSLanguage.EXTENSION}`
      );
      OMSFile.writeSync(
        LANG_EN,
        `${appData.folder}/${appData.langsFolder}/en.${OMSLanguage.EXTENSION}`
      );
    }

    if (
      !OMSFile.exists(`${appData.folder}/${appData.langsFolder}/${appData.langsMeta}`)
    ) {
      OMSLanguage.checkMeta();
    }
  }

  /**
   * Create or update metadata of languages (async)
   */
  private static checkMeta(): void {
    const langFolderPath = `${appData.folder}/${appData.langsFolder}`;
    const langFiles = OMSFile.readDirSync(langFolderPath);

    const langTimings = langFiles
      .map(val => {
        if (val.split('.')[1] === 'omslang') {
          const langTiming: OMSLanguageTiming = {
            name: val,
            time: OMSFile.getStats(`${langFolderPath}/${val}`, 'mtime')[0].value,
          };

          return langTiming;
        } else {
          return null;
        }
      })
      .filter(val => val !== null);

    const metaPath = `${langFolderPath}/${appData.langsMeta}`;
    if (OMSFile.exists(metaPath)) {
      const meta: OMSLanguageMeta[] = OMSFile.readSync(metaPath);
      let needRewrite = false;

      for (let i = 0; i < meta.length; i++) {
        for (let j = 0; i < langTimings.length; j++) {
          if (meta[i].filename === langTimings[j].name) {
            if (meta[i].modifyTime !== langTimings[j].time) {
              needRewrite = true;
              break;
            }
          }
        }

        if (needRewrite) {
          break;
        }
      }

      if (needRewrite) {
        OMSLanguage.rewriteMeta(langTimings);
      }
    } else {
      OMSLanguage.rewriteMeta(langTimings);
    }
  }

  /**
   * Update file with metadata
   * @param files - current data about file (OMSLanguageTiming)
   */
  private static rewriteMeta(files: OMSLanguageTiming[]): void {
    const filesMeta: OMSLanguageMeta[] = files.map(val => {
      const langInfoFromFile = OMSFile.readSync(
        `${appData.folder}/${appData.langsFolder}/${val.name}`
      );
      const langInfo: OMSLanguageMeta = {
        abbr: langInfoFromFile.INFO.ABBR,
        name: langInfoFromFile.INFO.NAME,
        filename: val.name,
        isCompleted: langInfoFromFile.INFO.IS_COMPLETED,
        modifyTime: val.time,
      };

      return langInfo;
    });

    OMSFile.writeSync(
      filesMeta,
      `${appData.folder}/${appData.langsFolder}/${appData.langsMeta}`
    );
  }

  /** Full name of lang package */
  public name: string;

  /** Abbr of lang package for functions */
  public abbr: string;

  /** Is completed lang package or not */
  public isCompleted: boolean;

  /** Content of package */
  public data: any;

  constructor(abbr: string, name?: string, isCompleted?: boolean) {
    if (name || isCompleted !== undefined) {
      this.abbr = abbr;
      this.name = name;
      this.isCompleted = isCompleted;
    } else {
      const langData = OMSFile.readSync(
        `${appData.folder}/${appData.langsFolder}/${abbr}.${OMSLanguage.EXTENSION}`
      );
      this.abbr = langData.INFO.ABBR;
      this.name = langData.INFO.NAME;
      this.isCompleted = langData.INFO.IS_COMPLETED;
      this.data = langData;
    }
  }
}
