// @flow
// Main container of app with routes
// Import React components
import React, { Component } from 'react';
import { Provider } from 'react-redux';
// Import locale provider of Ant D
import { LocaleProvider } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';
// Import main window class
import type { Store } from '../reducers/types';
import App from './App/index';

type Props = {
  store: Store,
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    const { store } = this.props;
    return (
      <LocaleProvider locale={ru_RU}>
        <Provider store={store}>
          <App />
        </Provider>
      </LocaleProvider>
    );
  }
}
