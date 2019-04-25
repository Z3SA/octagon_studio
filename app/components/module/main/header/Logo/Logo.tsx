import React, { PureComponent } from 'react';

import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';

import styles from './Logo.m.scss';

export default class Logo extends PureComponent {
  menu = (
    <Menu>
      <Menu.Item key="about-app">О программе</Menu.Item>
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
