import { primaryColors } from './primaryColors.enum';

export default interface IStoreAppUI {
  language: string;
  backColor?: 'light' | 'dark' | 'adaptive';
  primaryColor?: primaryColors;
}
