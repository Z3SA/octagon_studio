import React, { Component } from 'react';
import { Menu } from 'antd';

export default class MenuItem extends Component {
  render() {
    let subMenu = '';

    const { name, rightPart, items } = this.props;

    if (items) {
      subMenu = <Menu dir="vertical" isSub items={items} />;
    }

    return (
      <li className="menu__item menu-item">
        <span className="menu-item__name">{name}</span>
        <span className="menu-item__right">{rightPart}</span>
        {subMenu}
      </li>
    );
  }
}
