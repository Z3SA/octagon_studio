import fs from 'fs';

export default class OMSFile {
    static readJSON(file) { // Read json file and return JS-object
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

    static writeJSON(content, file) {
        fs.writeFileSync(file, JSON.stringify(content), "utf8");
    }

    static readDir(path) {
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
}
