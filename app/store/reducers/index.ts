import { combineReducers } from 'redux';
import { mainReducer } from './main';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    main: mainReducer(),
  });
