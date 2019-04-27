import React, { PureComponent } from 'react';

import Menu from 'antd/lib/menu';
import { TranslateContext } from 'modules/Root';
import IOMSLDMainMenu from 'data/common/model/lang/OMSLDMainMenu.interface';

export default class MainMenu extends PureComponent {
  static contextType = TranslateContext;

  lang: IOMSLDMainMenu = this.context.MAIN_WINDOW.MAIN_MENU;

  render() {
    return (
      <Menu mode="horizontal">
        <Menu.SubMenu key="menu-file" title={this.lang.FILE.TITLE}>
          <Menu.Item key="menu-file-open-project">
            {this.lang.FILE.LIST.CREATE_PROJECT}
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  }
}
