/** Schema of OMS config */
export default interface IOMSConfig {
  major: number;
  version: string;
  lang: string;
  type: 'pre-alpha' | 'alpha' | 'beta' | 'dev' | 'release';
}
