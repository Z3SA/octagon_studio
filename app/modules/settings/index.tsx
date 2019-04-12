import { Input, Modal } from 'antd';
import React, { Component } from 'react';

import SettingsParameter from '../../components/module/settings/SettingsParameter';

import { oms } from '../../data/data.init';

export default class Settings extends Component {
  // States of window
  public state = {
    author: oms.user.user,
    devTeam: oms.user.devTeam,
    language: oms.lang.abbr,
  };

  public render() {
    return (
      <Modal title="Создать проект" width={600}>
        <SettingsParameter title="Название проекта">
          <Input style={{ width: 250 }} />
        </SettingsParameter>

        <SettingsParameter title="Описание проекта">
          <Input style={{ width: 250 }} />
        </SettingsParameter>

        <SettingsParameter title="Каталог проекта" />
      </Modal>
    );
  }
}
