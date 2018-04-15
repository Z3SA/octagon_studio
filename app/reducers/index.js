// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import appMain from './app';

const rootReducer = combineReducers({
    counter,
    router,
    appMain
});

export default rootReducer;
