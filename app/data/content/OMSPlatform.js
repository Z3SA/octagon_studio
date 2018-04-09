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
    tags: array;

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

    createTags() {
        let tags = [];

        if (debug) tags.push("Debug");
        if (sdk) tags.push("SDK");

        this.tags = tags;
    }

    formToMin() {
        this.createTags();

        let config = {
            path: this.path,
            name: this.name,
            version: this.version,
            tags: this.tags
        };

        return config;
    }
} 