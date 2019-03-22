// Import React components
import React, { Component } from 'react';
// Import Ant D components
import { Menu } from 'antd';

export default class MainMenu extends Component {
  render() {
    const { eventHandler, items } = this.props;
    return (
      <Menu
        mode="horizontal"
        className="main-win__top-nav top-nav"
        onClick={eventHandler}
      >
        {items.map(item => {
          const subItems = [];
          item.items.map(currentItem => {
            const { key, event, inWorkDev, name, hotkey } = currentItem;
            return subItems.push(
              <Menu.Item key={key} event={event} disabled={inWorkDev}>
                <span className="top-nav__item-name">{name}</span>
                {hotkey ? (
                  <span className="top-nav__hotkey">{hotkey}</span>
                ) : (
                  ''
                )}
              </Menu.Item>
            );
          });

          return <Menu.SubMenu title={item.name} key={item.key} />;
        })}
      </Menu>
    );
  }
}
