import { fs } from '../../preload';

export default class OMSFile {
    static readJSON(file) {
        var result;

        result= fs.readFileSync(file, (err, contents) => {
            let fileResult;

            if (!err) {
                let str = contents.toString();
                fileResult = JSON.parse(str);
            } else {
                fileResult = "ERR (code 1): " + err;
            }

            return fileResult;
        });

        console.log(result);
        return result;
    }
}
