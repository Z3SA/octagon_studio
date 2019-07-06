import React, { PureComponent } from 'react';

import Layout from 'antd/lib/layout/layout';

import styles from './StatusBar.m.scss';
import { generateMixClass } from 'components/utils';
import { IOMSLDStatusbar } from 'data/common/model/lang';
import { TranslateContext } from 'modules/global/TranslateContext';

const { Footer } = Layout;

export default class StatusBar extends PureComponent {
  static contextType = TranslateContext;

  lang: IOMSLDStatusbar = this.context.MAIN_WINDOW.STATUSBAR;

  render() {
    return (
      <Footer className={styles.StatusBar}>
        <div
          className={generateMixClass([
            {
              name: styles.StatusBar__side,
              condition: true,
            },
            {
              name: styles['StatusBar__side--left'],
              condition: true,
            },
          ])}
        >
          <div className={styles.StatusBar__cell}>{this.lang.PROGRAM_STATUS.START}</div>
        </div>

        <div
          className={generateMixClass([
            {
              name: styles.StatusBar__side,
              condition: true,
            },
            {
              name: styles['StatusBar__side--right'],
              condition: true,
            },
          ])}
        >
          <div className={styles.StatusBar__cell}>Mk 0 Insiders (v0.6.0)</div>
        </div>
      </Footer>
    );
  }
}
