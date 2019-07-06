import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from 'modules/main/App/App';
import { configureStore, history } from 'store/configureStore';
import ConnectedGlobalProvider from './global/ConnectedGlobalProvider';
import { oms } from 'data/data.init';
import { IStore } from 'store/model/store.interface';

const initial: IStore = {
  app: {
    ui: {
      language: oms.lang.abbr,
      langList: oms.lang.langList,
    },
  },
};

/**
 * Root component (entry-point of providers and main window UI)
 */
const Root = () => (
  <Provider store={configureStore(initial)}>
    <ConnectedRouter history={history}>
      <ConnectedGlobalProvider>
        <App />
      </ConnectedGlobalProvider>
    </ConnectedRouter>
  </Provider>
);

export default Root;
