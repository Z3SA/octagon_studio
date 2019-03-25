import React, { Component } from 'react';
import { Modal, Button, Input, message } from 'antd';

import SettingsParameter from 'components/module/settings/SettingsParameter';

import { octagon, LANG } from 'index.tsx';
import OMS from 'data/module/main/OMS';
import OMSUser from 'data/module/main/OMSUser';

// Language package of window
let LANG__SETTINGS;

export default class Settings extends Component {
  // States of window
  state = {
    language: octagon.lang.abbr,
    author: octagon.user.user,
    devTeam: octagon.user.devTeam,
    platforms: octagon.user.platforms,
  };

  // Saving settings
  saveSettings = () => {
    const { language, author, devTeam, platforms } = this.state;

    OMS.saveConfig(octagon.version, language, octagon.buildStatus);
    OMSUser.saveUser(author, devTeam, platforms, octagon.user.appKey);

    message.success(LANG__SETTINGS.STATUS.SUCCESS, 3);
  };

  // Click on button "Apply"
  handleApply = () => {
    this.saveSettings();
  };

  // Click on button "OK"
  handleOk = () => {
    this.saveSettings();
    this.hideModal();
  };

  render() {
    // Link on language pack of window
    LANG__SETTINGS = LANG.SETTINGS;

    // All bottom btns
    const bottomBtns = [
      <Button key="cancel" onClick={this.hideModal}>
        {LANG__SETTINGS.BOTTOM_BTNS.CANCEL}
      </Button>,
      <Button key="OK" type="primary" onClick={this.handleOk}>
        Создать
      </Button>,
    ];

    return (
      <Modal title="Создать проект" onCancel={this.hideModal} footer={bottomBtns} width={600}>
        <SettingsParameter title="Название проекта">
          <Input
            style={{ width: 250 }}
            onChange={e => {
              this.setState({ author: e.target.value });
            }}
          />
        </SettingsParameter>

        <SettingsParameter title="Описание проекта">
          <Input
            style={{ width: 250 }}
            onChange={e => {
              this.setState({ author: e.target.value });
            }}
          />
        </SettingsParameter>

        <SettingsParameter title="Каталог проекта">
          <Input
            style={{ width: 250 }}
            onChange={e => {
              this.setState({ author: e.target.value });
            }}
          />
          {'  '}
          <Button onClick={this.chooseFolder} />
        </SettingsParameter>
      </Modal>
    );
  }
}
