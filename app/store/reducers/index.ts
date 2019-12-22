import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import { appReducer } from './app';
import { mainReducer } from './main';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer(),
    main: mainReducer(),
  });

export default createRootReducer;
