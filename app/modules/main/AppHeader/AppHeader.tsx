import React, { Component } from 'react';

import { Layout } from 'antd';

import MainMenu from '../MainMenu';
import styles from './AppHeader.m.scss';

const { Header } = Layout;

export default class AppHeader extends Component {
  public render() {
    return (
      <Header className={styles.AppHeader}>
        <span className="main-win__logo" />
        <MainMenu />
      </Header>
    );
  }
}
