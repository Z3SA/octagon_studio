import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'assets/styles/global.less';
import 'assets/styles/vars/index.scss';

import Root from 'modules/Root';

/**
 * Implementation of Less files (imports that higher of comment) cause of Antd styles
 * After that all overrides are resolved through CSS vars
 */

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
