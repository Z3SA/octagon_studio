import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from 'modules/main/App/App';
import { configureStore, history } from 'store/configureStore';
import ConnectedGlobalProvider from './global/ConnectedGlobalProvider';

/**
 * Root component (entry-point of providers and main window UI)
 */
const Root = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <ConnectedGlobalProvider>
        <App />
      </ConnectedGlobalProvider>
    </ConnectedRouter>
  </Provider>
);

export default Root;
