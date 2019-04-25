import React, { PureComponent } from 'react';
import { shell } from 'electron';

import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';

import styles from './Logo.m.scss';
import AboutAppModal from '../../modals/AboutAppModal/AboutAppModal';
import { APP_CONSTS } from 'data/utils/AppConsts.enum';

export default class Logo extends PureComponent {
  menu = (
    <Menu>
      <Menu.Item key="about-app" onClick={AboutAppModal}>
        О программе
      </Menu.Item>
      <Menu.Item key="check-updates" disabled={true}>
        Проверить обновления
      </Menu.Item>
      <Menu.Item key="open-repo" onClick={this.openRepo}>
        Открыть репозиторий
      </Menu.Item>
    </Menu>
  );

  /** Open GitHub repo in default browser */
  openRepo(): void {
    shell.openExternal(APP_CONSTS.GITHUB_LINK);
  }

  render() {
    return (
      <Dropdown overlay={this.menu} trigger={['click']}>
        <span className={styles.Logo} />
      </Dropdown>
    );
  }
}
