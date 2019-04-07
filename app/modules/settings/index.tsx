import { Button, Input, message, Modal } from 'antd';
import React, { Component } from 'react';

import SettingsParameter from 'components/module/settings/SettingsParameter';

import OMS from 'data/module/main/OMS.class';
import OMSUser from 'data/module/main/OMSUser.class';
import { LANG, oms } from 'index.tsx';

// Language package of window
let LANG__SETTINGS: any;

export default class Settings extends Component {
  // States of window
  public state = {
    author: oms.user.user,
    devTeam: oms.user.devTeam,
    language: oms.lang.abbr,
  };

  public render() {
    // Link on language pack of window
    LANG__SETTINGS = LANG.SETTINGS;

    // All bottom btns
    const bottomBtns = [
      <Button key="cancel">{LANG__SETTINGS.BOTTOM_BTNS.CANCEL}</Button>,
      <Button key="OK" type="primary" onClick={this.handleOk}>
        Создать
      </Button>,
    ];

    return (
      <Modal title="Создать проект" footer={bottomBtns} width={600}>
        <SettingsParameter title="Название проекта">
          <Input style={{ width: 250 }} />
        </SettingsParameter>

        <SettingsParameter title="Описание проекта">
          <Input style={{ width: 250 }} />
        </SettingsParameter>

        <SettingsParameter title="Каталог проекта">
          <Button />
        </SettingsParameter>
      </Modal>
    );
  }

  // Saving settings
  private saveSettings = () => {
    const { language, author, devTeam } = this.state;
    message.success(LANG__SETTINGS.STATUS.SUCCESS, 3);
  }

  // Click on button "OK"
  private handleOk = () => {
    this.saveSettings();
  }
}
