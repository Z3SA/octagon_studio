import React, { PureComponent } from 'react';

import Modal from 'antd/lib/modal';

interface ISettingsModalProps {
  visible?: boolean;
  onClose?: any;
}

export default class SettingsModal extends PureComponent<ISettingsModalProps> {
  render() {
    return <Modal />;
  }
}
