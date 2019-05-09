import React, { PureComponent } from 'react';

import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';

import { TranslateContext } from 'modules/TranslateContext';
import IOMSLDSettings from 'data/common/model/lang/OMSLDSettings.interface';

interface ISettingsModalProps {
  visible: boolean;
  onCloseModal: any;
}

export default class SettingsModal extends PureComponent<ISettingsModalProps> {
  static contextType = TranslateContext;

  lang: IOMSLDSettings = this.context.SETTINGS;

  onCancel = (): void => {
    this.props.onCloseModal();
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        title={this.lang.TITLE}
        destroyOnClose={true}
        onCancel={this.onCancel}
        footer={[
          <Button key="cancel" onClick={this.onCancel}>
            {this.lang.BOTTOM_BTNS.CANCEL}
          </Button>,
          <Button key="apply">{this.lang.BOTTOM_BTNS.APPLY}</Button>,
          <Button key="ok" type="primary">
            OK
          </Button>,
        ]}
      />
    );
  }
}
