import React, { Component } from 'react';

import { Layout } from 'antd';

import MainMenu from '../MainMenu';
import styles from './AppHeader.m.scss';
import { oms } from '../../../data/data.init';

const { Header } = Layout;

export default class AppHeader extends Component {
  public render() {
    let buildTypeLabel;

    switch (oms.type) {
      case 'pre-alpha':
      case 'alpha':
        buildTypeLabel = <React.Fragment>&alpha;</React.Fragment>;
        break;
      case 'beta':
        buildTypeLabel = <React.Fragment>&beta;</React.Fragment>;
        break;
      case 'dev':
        buildTypeLabel = 'd';
        break;
      default:
        buildTypeLabel = '';
    }

    return (
      <Header className={styles.AppHeader}>
        <span className={styles.AppHeader__logo}>{buildTypeLabel}</span>
        <MainMenu />
      </Header>
    );
  }
}
