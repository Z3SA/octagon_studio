import React from 'react';
import { Provider } from 'react-redux';

import { LocaleProvider } from 'antd';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

import App from './main/App/index';
import { configureStore } from '../store/configureStore';
import { hot } from 'react-hot-loader';

/** Redux Store configuration */
const store = configureStore();

/**
 * Root component (entry-point of providers and main window UI)
 */
const Root = () => (
  <LocaleProvider locale={ru_RU}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>
);

export default Root;
