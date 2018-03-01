import React, { Component } from 'react';
import './Menu.scss';

export default class Menu extends Component {
    render() {
        // Default class
        let currentClass = "menu";

        // Direction of menu (vertical or horizontal)
        if (this.props.dir) {
            currentClass += " menu--" + this.props.dir;
        }

        // Parent of menu
        if (this.props.parent) {
            currentClass += " " + this.props.parent + "__menu";
        }

        // Menu is submenu or not
        if (this.props.isSub) {
            currentClass += " menu--sub";
        }

        // Rendering menu items
        let items = this.props.items;
        let itemsRender = items.map((item, i) => {
            if (item.type === "separator") {
                return <MenuSeparator />
            } else {
                return <MenuItem key={i} name={item.name} items={item.items} rightPart={item.rightPart} />
            }
        });

        return (
            <menu className={currentClass}>
                {itemsRender}
            </menu>
        );
    }
}

// Separator for menus
class MenuSeparator extends Component {
    render() {
        return <li className="menu__separator"></li>
    }
}

// 
class MenuItem extends Component {
    render() {
        var subMenu = "",
            subItems = this.props.items;
        if (subItems) {
            subMenu = <Menu dir="vertical" isSub={true} items={subItems} />
        } 

        return (
            <li className="menu__item menu-item">
                <span className="menu-item__name">{this.props.name}</span>
                <span className="menu-item__right">{this.props.rightPart}</span>
                {subMenu}
            </li>
        );
    }
}