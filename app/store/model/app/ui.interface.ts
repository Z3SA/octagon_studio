import { primaryColors } from './primaryColors.enum';
import { languages } from 'store/actions/app/languages.enum';

export default interface IStoreAppUI {
  language: languages;
  backColor?: 'light' | 'dark' | 'adaptive';
  primaryColor?: primaryColors;
}
