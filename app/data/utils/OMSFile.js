import fs from 'fs';
import electron from 'electron';

const electronRemote = electron.remote;

export default class OMSFile {
    static readJSON(file: string) { // Read json file and return JS-object
        var result;

        result = fs.readFileSync(file, "utf8", (err, contents) => {    
            let fileResult;

            if (!err) {
                fileResult = JSON.stringify(contents.trim());
            } else {
                fileResult = {
                    type: "error",
                    code: "1",
                    message: err
                };
            }
            
            return fileResult;
        });
        
        return JSON.parse(result.trim());
    }

    static writeJSON(content: object, file: string) {
        fs.writeFileSync(file, JSON.stringify(content), "utf8");
    }

    static readDir(path: string) {
        var result;

        result = fs.readdirSync(path, (err, contents) => {
            if (!err) {
                return contents;
            } else {
                return {
                    type: "error",
                    code: "2",
                    message: err
                };
            }
        });

        return result;
    }

    static chooseDir() {
        let path = electronRemote.dialog.showOpenDialog({
            properties: ['openDirectory']   
        });

        return (path === undefined) ? false : path[0];
    }

    static exists(path) {
        return fs.existsSync(path);
    }
}
