import React from 'react';
import { Provider } from 'react-redux';

import App from 'modules/main/App/App';
import { configureStore } from 'store/configureStore';
import GlobalProvider from './global/GlobalProvider';

/**
 * Root component (entry-point of providers and main window UI)
 */
const Root = () => (
  <Provider store={configureStore()}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Provider>
);

export default Root;
