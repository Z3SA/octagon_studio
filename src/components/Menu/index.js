import React, { Component } from 'react';
import './Menu.scss';

export default class Menu extends Component {
    render() {
        var currentClass = "menu";

        if (this.props.dir) {
            currentClass += " menu--" + this.props.dir;
        }

        if (this.props.parent) {
            currentClass += " " + this.props.parent + "__menu";
        }

        var items = this.props.items;
        var itemsRender = items.map((item) => {
            if (item.type == "separator") {
                return <MenuSeparator />
            } else {
                return <MenuItem name={item.name} />
            }
        });

        return (
            <menu className={currentClass}>
                {itemsRender}
            </menu>
        );
    }
}

class MenuSeparator extends Component {
    render() {
        return <li className="menu__separator"></li>
    }
}

class MenuItem extends Component {
    render() {
        return (
            <li class="menu__item menu-item">
                <span className="menu-item__name">{this.props.name}</span>
            </li>
        );
    }
}