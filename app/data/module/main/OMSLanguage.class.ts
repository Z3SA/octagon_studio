import appData from 'data/common/appData';
import OMSFile from 'data/utils/OMSFile.class';
import { fileExtensions } from 'data/common/fileExtensions.enum';

import OMSLanguageMeta from './model/OMSLanguageMeta.interface';
import OMSLanguageTiming from './model/OMSLanguageTiming.interface';

/*
 *  This class created for multi-language support on program.
 *  Each language package is in %APPDATA% folder of app.
 */
export default class OMSLanguage {
  /** File extension of language pack */
  public static readonly EXTENSION = fileExtensions.LANGUAGE_PACK;

  /** Paths for class */
  private static PATHS = {
    LANG_FOLDER: `${appData.folder}/${appData.langsFolder}`,
    META: `${appData.folder}/${appData.langsFolder}/${appData.langsMeta}`,
  };

  /**
   * Check languages list on start of editor
   */
  private static checkLangsList(): OMSLanguage[] {
    if (!OMSFile.exists(OMSLanguage.PATHS.LANG_FOLDER)) {
      const LANG_RU = require('assets/langs/ru.json');
      const LANG_EN = require('assets/langs/en.json');

      OMSFile.writeSync(LANG_RU, OMSLanguage.getPathToPack('ru'));
      OMSFile.writeSync(LANG_EN, OMSLanguage.getPathToPack('en'));
    }

    return OMSLanguage.checkMeta().map(
      ({ abbr, name, isCompleted }) => new OMSLanguage(abbr, name, isCompleted)
    );
  }

  /**
   * Get path to language pack with attr
   * @param abbr - Abbr of language pack
   */
  private static getPathToPack(abbr: string): string {
    return `${OMSLanguage.PATHS.LANG_FOLDER}/${abbr}.${OMSLanguage.EXTENSION}`;
  }

  /**
   * Create or update metadata of languages (async)
   */
  private static checkMeta(): OMSLanguageMeta[] {
    const langFiles = OMSFile.readDirSync(OMSLanguage.PATHS.LANG_FOLDER);

    const langTimings = langFiles
      .map(val => {
        if (val.split('.')[1] === 'omslang') {
          const langTiming: OMSLanguageTiming = {
            name: val,
            time: OMSFile.getStats(`${OMSLanguage.PATHS.LANG_FOLDER}/${val}`, 'mtime')[0]
              .value,
          };

          return langTiming;
        } else {
          return null;
        }
      })
      .filter(val => val !== null);

    if (OMSFile.exists(OMSLanguage.PATHS.META)) {
      const meta: OMSLanguageMeta[] = OMSFile.readSync(OMSLanguage.PATHS.META);
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
        return OMSLanguage.rewriteMeta(langTimings);
      } else {
        return meta;
      }
    } else {
      return OMSLanguage.rewriteMeta(langTimings);
    }
  }

  /**
   * Update file with metadata
   * @param files - current data about file (OMSLanguageTiming)
   */
  private static rewriteMeta(files: OMSLanguageTiming[]): OMSLanguageMeta[] {
    const filesMeta: OMSLanguageMeta[] = files.map(val => {
      const langInfoFromFile = OMSFile.readSync(
        `${OMSLanguage.PATHS.LANG_FOLDER}/${val.name}`
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

    OMSFile.writeSync(filesMeta, OMSLanguage.PATHS.META);
    return filesMeta;
  }

  /** Full name of lang package */
  public name: string;

  /** Abbr of lang package for functions */
  public abbr: string;

  /** Is completed lang package or not */
  public isCompleted: boolean;

  /** Content of package */
  public data: any;

  /** List of languages */
  public langList: OMSLanguage[];

  constructor(abbr: string, name?: string, isCompleted?: boolean) {
    if (name || isCompleted !== undefined) {
      this.abbr = abbr;
      this.name = name;
      this.isCompleted = isCompleted;
    } else {
      this.langList = OMSLanguage.checkLangsList();
      const langData = OMSFile.readSync(OMSLanguage.getPathToPack(abbr));
      this.abbr = langData.INFO.ABBR;
      this.name = langData.INFO.NAME;
      this.isCompleted = langData.INFO.IS_COMPLETED;
      this.data = langData;
    }
  }
}
