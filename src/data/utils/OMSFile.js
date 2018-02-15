import fs from '../env';

export default class OMSFile {
    static readJSON(file) {
        let result;

        fs.readFile(file, (err, contents) => {
            if (!err) {
                let str = contents.toString();
                result = JSON.parse(str);
            } else {
                result = "ERR (code 1): " + err;
            }
        });

        return result;
    }
}
