import React, { PureComponent } from 'react';

import ConnectedAboutAppModal from 'modules/main/modals/AboutAppModal/ConnectedAboutAppModal';
import ConnectedSettingsModal from 'modules/settings/SettingsModal/ConnectedSettingsModal';

interface IAppModalStackProps {
  appModalVisible: boolean;
}

export default class AppModalStack extends PureComponent<IAppModalStackProps> {
  render() {
    return (
      <React.Fragment>
        <ConnectedAboutAppModal />
        <ConnectedSettingsModal />
      </React.Fragment>
    );
  }
}
