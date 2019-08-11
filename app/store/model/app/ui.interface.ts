import { OMSLanguage } from 'data/module/main';

import { primaryColors } from './primaryColors.enum';

export default interface IStoreAppUI {
  language?: string;
  backColor?: 'light' | 'dark' | 'adaptive';
  primaryColor?: primaryColors;
  langList?: OMSLanguage[];
}
