import React, { Component } from 'react';
import './StatusBar.scss';

export default class StatusBar extends Component {
    render() {
        // Rendering status bar items
        var currentClass = "status-bar",
            items = this.props.items,
            itemsRender = items.map(item => {
                return <span className="status-bar__item">{item}</span>
            });

        // Parent of status bar
        if (this.props.parent) {
            currentClass += " " + this.props.parent + "__status-bar";
        }

        return(
            <footer className={currentClass}>
                {itemsRender}
            </footer>
        );
    }
}