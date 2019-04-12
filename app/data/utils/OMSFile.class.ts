import { remote } from 'electron';
import fs from 'fs';

import OMSError from 'data/common/model/OMSError.interface';
import OMSKVPair from 'data/common/model/OMSKVPair.interface';

/**
 * File worker
 */
export default class OMSFile {
  /**
   * Read JSON file sync
   * @param file - file path
   * @returns parsed object
   */
  public static readSync(file: string): any {
    return JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }).trim());
  }

  /**
   * Write JSON file async
   * @param file - file path
   * @param data - JS object or string for write
   * @returns promise of write process
   */
  public static write(file: string, data: any): Promise<string> {
    return new Promise((resolve: any) => {
      fs.writeFile(
        file,
        typeof data === 'object' ? JSON.stringify(data) : data,
        { encoding: 'utf8' },
        error => {
          if (error) {
            const { errno, code, path, syscall, stack } = error;
            const err: OMSError = {
              code: 100,
              message: 'Error while write file',
              data: { errno, code, path, syscall, stack },
            };

            console.error('In-run error: check log and docs about error.', err);

            throw err;
          }

          resolve(file);
        }
      );
    });
  }

  /**
   * Write JSON file sync
   * @param data - JS object or string for write
   * @param file - file path
   * @returns string of file path
   */
  public static writeSync(data: any, file: string): string {
    fs.writeFileSync(file, typeof data === 'object' ? JSON.stringify(data) : data, { encoding: 'utf8' });

    return file;
  }

  /**
   * Read content of directory
   * @param path
   */
  public static readDirSync(path: string): string[] {
    return fs.readdirSync(path, { encoding: 'utf8' });
  }

  public static chooseDir() {
    const path = remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    });

    return path === undefined ? false : path[0];
  }

  /**
   * Check if directory exists
   * @param path - directory path
   */
  public static exists(path: string): boolean {
    return fs.existsSync(path);
  }

  /**
   * Get one or more of stats of file
   * @param path - file path
   * @param props - props to scan
   */
  public static getStats(path: string, props: string | string[]): any {
    const output: any = fs.statSync(path);
    const result: OMSKVPair[] = [];

    if (typeof props === 'string') {
      result.push({ key: props, value: output[props] } as OMSKVPair);
    } else {
      props.forEach(val => {
        result.push({ key: val, value: output[val] } as OMSKVPair);
      });
    }

    return result;
  }
}
