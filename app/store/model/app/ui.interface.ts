import { primaryColors } from './primaryColors.enum';
import OMSLanguage from 'data/module/main/OMSLanguage.class';

export default interface IStoreAppUI {
  language?: string;
  backColor?: 'light' | 'dark' | 'adaptive';
  primaryColor?: primaryColors;
  langList?: OMSLanguage[];
}
