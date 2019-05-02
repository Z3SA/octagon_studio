import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/**
 * This is one implementation of Less cause of Antd styles
 * Ffter that all overrides are resolved through CSS vars
 */
import './assets/styles/global.less';
import 'assets/styles/vars/index.scss';
import Root from 'modules/Root';

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
