import React, { PureComponent } from 'react';
import ConnectedAboutAppModal from 'components/module/main/modals/AboutAppModal/ConnectedAboutAppModal';

interface IAppModalStackProps {
  appModalVisible: boolean;
}

export default class AppModalStack extends PureComponent<IAppModalStackProps> {
  render() {
    return <ConnectedAboutAppModal />;
  }
}
