// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';
import Routes from '../routes';

export default class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <Routes />
                </ConnectedRouter>
            </Provider>
        );
    }
}
