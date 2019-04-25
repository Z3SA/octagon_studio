import React, { PureComponent } from 'react';

import Menu from 'antd/lib/menu';

export default class MainMenu extends PureComponent {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.SubMenu key="menu-file" title="Файл">
          <Menu.Item key="menu-file-open-project">Открыть проект...</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  }
}
