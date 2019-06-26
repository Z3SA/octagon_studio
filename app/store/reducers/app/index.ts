import { combineReducers } from 'redux';

import { uiReducer } from './ui';

export function appReducer() {
  return combineReducers({
    ui: uiReducer,
  });
}
