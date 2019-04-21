import React, { PureComponent } from 'react';

import { Layout, Icon } from 'antd';

import styles from './AppHeader.m.scss';
import { oms } from 'data/data.init';

const { Header } = Layout;

export default class AppHeader extends PureComponent {
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
        <div className={styles.AppHeader__left}>
          <span className={styles.AppHeader__logo}>{buildTypeLabel}</span>
        </div>

        <div>
          <Icon type="setting" />
        </div>
      </Header>
    );
  }
}
