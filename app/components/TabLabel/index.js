import React, { Component } from 'react';
import FAIcon from '@fortawesome/react-fontawesome';

export default class TabLabel extends Component {
    render() {
        return (
            <span>
                <FAIcon icon={this.props.icon} />
                <span className="settings-win__tab-name">{this.props.title}</span>
            </span>
        );
    }
}