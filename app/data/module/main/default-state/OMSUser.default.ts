import sha256 from 'sha256';
import OMSUserConfig from '../model/OMSUserConfig.interface';

export const OMS_USER_DEFAULT: OMSUserConfig = {
  user: 'User',
  dev_team: '',
  app_key: sha256(
    Math.random()
      .toString(36)
      .slice(-8)
  ),
};
