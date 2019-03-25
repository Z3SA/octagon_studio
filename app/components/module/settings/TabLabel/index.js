import React, { Component } from 'react';
import ReactPropTypes from 'prop-types';

export default class TabLabel extends Component {
  static propTypes = {
    title: ReactPropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <span>
        <span className="settings-win__tab-name">{title}</span>
      </span>
    );
  }
}
