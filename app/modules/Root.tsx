import React from 'react';
import { Provider } from 'react-redux';

import App from 'modules/main/App/App';
import { configureStore } from 'store/configureStore';
import ConnectedGlobalProvider from './global/ConnectedGlobalProvider';

/**
 * Root component (entry-point of providers and main window UI)
 */
const Root = () => (
  <Provider store={configureStore()}>
    <ConnectedGlobalProvider>
      <App />
    </ConnectedGlobalProvider>
  </Provider>
);

export default Root;
