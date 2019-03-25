import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './.global.less';
import OMS from './data/module/main/OMS';
import Root from './modules/Root';
import { configureStore } from './store/configureStore';

/** Last session and data of main window */
export const octagon = new OMS();

/** Language data */
export const LANG = octagon.lang.data;

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
