// @flow
// Main container of app with routes
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import Routes from '../routes';
import { LocaleProvider } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

export default class Root extends Component {
    render() {
        return (
            <LocaleProvider locale={ru_RU}>
                <Provider store={this.props.store}>
                    <ConnectedRouter history={this.props.history}>
                        <Routes />
                    </ConnectedRouter>
                </Provider>
            </LocaleProvider>
        );
    }
}
