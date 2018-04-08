import React, { Component } from 'react';
import { Divider } from 'antd';

export default class SettingsParameter extends Component {
    render() {
        const { title, children, desc } = this.props;

        let descRender = (desc) ? <p className="settings-win__param-desc">{desc}</p> : null;

        return(
            <div>
                <Divider className="settings-win__divider" />
                <h4>{title}</h4>
                {children}
                {descRender}
            </div>
        );
    }
}