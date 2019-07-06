import sha256 from 'sha256';
import { IOMSUserConfig } from '../model';

export const OMS_USER_DEFAULT: IOMSUserConfig = {
  user: 'User',
  dev_team: '',
  app_key: sha256(
    Math.random()
      .toString(36)
      .slice(-8)
  ),
};
