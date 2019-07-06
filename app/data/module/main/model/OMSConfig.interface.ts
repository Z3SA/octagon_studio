/** Schema of OMS config */
export interface IOMSConfig {
  major: number;
  version: string;
  lang: string;
  type: 'pre-alpha' | 'alpha' | 'beta' | 'dev' | 'release';
}
