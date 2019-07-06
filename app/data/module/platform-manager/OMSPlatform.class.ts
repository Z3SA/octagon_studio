import OMSFile from 'data/utils/OMSFile.class';

export default class OMSPlatform {
  public key: string;

  public path: string;

  public name: string;

  public version: string;

  public platformId: string;

  public desc: string;

  public debug: boolean;

  public sdk: any;

  constructor(path: string) {
    this.path = path;

    const config = OMSFile.readSync(this.path);

    this.key = config.key;
    this.name = config.name;
    this.version = config.version;
    this.platformId = config.platform_id;
    this.desc = config.desc;
    this.debug = config.debug;
    this.sdk = config.sdk;
  }

  public formToMin() {
    const tags = [];

    if (this.debug) {
      tags.push('Debug');
    }
    if (!this.sdk.is_default_sdk) {
      tags.push('SDK');
    }

    const config = {
      key: this.platformId,
      path: this.path,
      name: this.name,
      version: this.version,
      tags,
      isValid: true,
    };

    return config;
  }
}
