// Import all necessary react modules
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Importing Root and config
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';

// Import OMS class
import OMS from './data/app/OMS';

// Importing styles
import './.global.less';

// Settings of program in octagon.omsdata
export const octagon = new OMS();
export const LANG = octagon.lang.data;

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
