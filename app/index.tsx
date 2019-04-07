import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { oms } from 'main.dev';
import './.global.less';
import Root from './modules/Root';
import { configureStore } from './store/configureStore';

/** Language data */
export const LANG = oms.lang.data;

/** Redux Store configuration */
const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./modules/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./modules/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
