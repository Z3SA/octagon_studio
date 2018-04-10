import OMSFile from '../utils/OMSFile';

export default class OMSPlatform {
    key: string;
    path: string;
    name: string;
    version: string;
    platformId: string;
    desc: boolean;
    debug: boolean;
    sdk: boolean;

    constructor(path: string) {
        this.path = path;

        let config = OMSFile.readJSON(this.path);

        this.key = config.key;
        this.name = config.name;
        this.version = config.version;
        this.platformId = config.platform_id;
        this.desc = config.desc;
        this.debug = config.debug;
        this.sdk = config.sdk;
    }

    // get tags() {
    //     let tags = [];

    //     if (debug) tags.push("Debug");
    //     if (sdk) tags.push("SDK");

    //     return tags;
    // }

    formToMin() {
        let tags = [];

        if (this.debug) tags.push("Debug");
        if (!this.sdk.is_default_sdk) tags.push("SDK");

        let config = {
            key: this.platformId,
            path: this.path,
            name: this.name,
            version: this.version,
            tags: tags,
            isValid: true
        };

        return config;
    }
} 