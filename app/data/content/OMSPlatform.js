import OMSFile from '../utils/OMSFile';

export default class OMSPlatform {
  key;

  path;

  name;

  version;

  platformId;

  desc;

  debug;

  sdk;

  constructor(path) {
    this.path = path;

    const config = OMSFile.readJSON(this.path);

    this.key = config.key;
    this.name = config.name;
    this.version = config.version;
    this.platformId = config.platform_id;
    this.desc = config.desc;
    this.debug = config.debug;
    this.sdk = config.sdk;
  }

  formToMin() {
    const tags = [];

    if (this.debug) tags.push('Debug');
    if (!this.sdk.is_default_sdk) tags.push('SDK');

    const config = {
      key: this.platformId,
      path: this.path,
      name: this.name,
      version: this.version,
      tags,
      isValid: true
    };

    return config;
  }
}
