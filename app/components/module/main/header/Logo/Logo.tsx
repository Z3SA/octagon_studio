import React, { PureComponent } from 'react';

import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';

import styles from './Logo.m.scss';
import AboutAppModal from '../../modals/AboutAppModal/AboutAppModal';

export default class Logo extends PureComponent {
  menu = (
    <Menu>
      <Menu.Item key="about-app" onClick={AboutAppModal}>
        О программе
      </Menu.Item>
      <Menu.Item key="check-updates">Проверить обновления</Menu.Item>
    </Menu>
  );
  render() {
    return (
      <Dropdown overlay={this.menu} trigger={['click']}>
        <span className={styles.Logo} />
      </Dropdown>
    );
  }
}
