import React, { Component } from 'react';
import './StatusBar.scss';
import ReactPropTypes from 'prop-types';

export default class StatusBar extends Component {
  static propTypes = {
    items: ReactPropTypes.arrayOf.isRequired,
    parent: ReactPropTypes.string.isRequired,
  };

  render() {
    // Rendering status bar items
    let currentClass = 'status-bar';

    const { items, parent } = this.props;

    const itemsRender = items.map(item => <span className="status-bar__item">{item}</span>);

    // Parent of status bar
    if (parent) {
      currentClass += ` ${parent}__status-bar`;
    }

    return <footer className={currentClass}>{itemsRender}</footer>;
  }
}
