import { Utils } from '../../../../components/utils';
import { IOMSUserConfig } from '../model';

export const OMS_USER_DEFAULT: IOMSUserConfig = {
  user: 'User',
  dev_team: '',
  app_key: Utils.generateStr(24),
};
