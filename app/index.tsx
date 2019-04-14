import React from 'react';
import { render } from 'react-dom';

import './.global.less';
import { oms } from './data/data.init';
import Root from './modules/Root';
import { configureStore } from './store/configureStore';

/** Language data */
export const LANG = oms.lang.data;

/** Redux Store configuration */
const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
