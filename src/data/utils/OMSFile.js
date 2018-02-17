import { fs } from '../../preload';

export default class OMSFile {
    static readJSON(file) {
        var result;

        result = fs.readFileSync(file, (err, contents) => {
            console.log(file);

            if (!err) {
                let str = contents.toString();
                result = JSON.parse(str);
            } else {
                result = "ERR (code 1): " + err;
            }
            
            return result;
        });
        
        return result;
    }
}
