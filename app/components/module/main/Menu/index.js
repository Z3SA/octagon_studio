import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import './Menu.scss';
import MenuSeparator from './MenuSeparator';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  static propTypes = {
    dir: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired,
    isSub: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    items: PropTypes.any.isRequired,
  };

  render() {
    const { dir, parent, isSub, items } = this.props;
    // Default class
    let currentClass = 'menu';

    // Direction of menu (vertical or horizontal)
    if (dir) {
      currentClass += ` menu--${dir}`;
    }

    // Parent of menu
    if (parent) {
      currentClass += ` ${parent}__menu`;
    }

    // Menu is submenu or not
    if (isSub) {
      currentClass += ' menu--sub';
    }

    // Rendering menu items
    const itemsRender = items.map(item =>
      item.type === 'separator' ? (
        <MenuSeparator />
      ) : (
        <MenuItem name={item.name} items={item.items} rightPart={item.rightPart} />
      )
    );

    return <menu className={currentClass}>{itemsRender}</menu>;
  }
}
