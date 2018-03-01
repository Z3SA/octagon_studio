import fs from 'fs';

export default class OMSFile {
    static readJSON(file) {
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

        return JSON.parse(result);
    }
}
