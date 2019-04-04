import { remote } from 'electron';
import fs from 'fs';

import { OMSError } from 'common/model/OMSError.interface';

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
   *
   */
  public static write(file: string, data: any, cb: function): Promise<string> {
    return new Promise((resolve: any, reject: OMSError) => {
      fs.writeFile(file, data, { encoding: 'utf8' }, error => {
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
      });
    });
  }

  public static readJSON(file) {
    // Read json file and return JS-object
    const result = fs.readFileSync(file, 'utf8', (err, contents) => {
      let fileResult;

      if (!err) {
        fileResult = JSON.stringify(contents.trim());
      } else {
        fileResult = {
          type: 'error',
          code: '1',
          message: err,
        };
      }

      return fileResult;
    });

    return JSON.parse(result.trim());
  }

  public static writeJSON(content, file) {
    fs.writeFileSync(file, JSON.stringify(content), 'utf8');
  }

  public static readDir(path) {
    const result = fs.readdirSync(path, (err, contents) => {
      if (!err) {
        return contents;
      }
      return {
        type: 'error',
        code: '2',
        message: err,
      };
    });

    return result;
  }

  public static chooseDir() {
    const path = remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    });

    return path === undefined ? false : path[0];
  }

  public static exists(path) {
    return fs.existsSync(path);
  }
}
