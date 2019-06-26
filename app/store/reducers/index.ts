import { combineReducers } from 'redux';
import { mainReducer } from './main';
import { connectRouter } from 'connected-react-router';
import { appReducer } from './app';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer(),
    main: mainReducer(),
  });

export default createRootReducer;
