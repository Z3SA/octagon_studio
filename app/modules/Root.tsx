import React from 'react';
import { Provider } from 'react-redux';

import LocaleProvider from 'antd/lib/locale-provider';
import ru_RU from 'antd/lib/locale-provider/ru_RU';

import App from 'modules/main/App/App';
import { configureStore } from 'store/configureStore';
import { oms } from 'data/data.init';
import { TranslateContext } from './TranslateContext';

/** Redux Store configuration */
const store = configureStore();

/**
 * Root component (entry-point of providers and main window UI)
 */
const Root = () => (
  <LocaleProvider locale={ru_RU}>
    <Provider store={store}>
      <TranslateContext.Provider value={oms.lang.data}>
        <App />
      </TranslateContext.Provider>
    </Provider>
  </LocaleProvider>
);

export default Root;
