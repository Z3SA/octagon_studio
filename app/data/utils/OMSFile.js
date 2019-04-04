import fs from 'fs';
import { remote } from 'electron';

export default class OMSFile {
  static readJSON(file) {
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

  static writeJSON(content, file) {
    fs.writeFileSync(file, JSON.stringify(content), 'utf8');
  }

  static readDir(path) {
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

  static chooseDir() {
    const path = remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    });

    return path === undefined ? false : path[0];
  }

  static exists(path) {
    return fs.existsSync(path);
  }
}
