import React, { PureComponent } from 'react';

import styles from './Logo.m.scss';

export default class Logo extends PureComponent {
  render() {
    return <span className={styles.Logo} />;
  }
}
