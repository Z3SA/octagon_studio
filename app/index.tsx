import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './.global.less';
import { oms } from 'data/data.init';
import Root from 'modules/Root';

/** Language data */
export const LANG = oms.lang.data;

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./modules/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./modules/Root').default;
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
