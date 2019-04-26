import React, { PureComponent } from 'react';
import { shell } from 'electron';

import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';

import styles from './Logo.m.scss';
import AboutAppModal from '../../modals/AboutAppModal/AboutAppModal';
import { APP_CONSTS } from 'data/utils/AppConsts.enum';
import { TranslateContext } from 'modules/Root';
import IOMSLDLogoMenu from 'data/common/model/lang/OMSLDLogoMenu.interface';
import IOMSLD from 'data/common/model/lang/OMSLD.interface';

export default class Logo extends PureComponent {
  /** Apply translate provider */
  static contextType = TranslateContext;

  /** Redefenition of translate */
  lang: IOMSLDLogoMenu = (this.context as IOMSLD).MAIN_WINDOW.LOGO_MENU;

  menu = (
    <Menu>
      <Menu.Item key="about-app" onClick={AboutAppModal}>
        {this.lang.ABOUT_APP}
      </Menu.Item>
      <Menu.Item key="check-updates" disabled={true}>
        {this.lang.CHECK_UPDATES}
      </Menu.Item>
      <Menu.Item key="open-repo" onClick={this.openRepo}>
        {this.lang.OPEN_REPO}
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
