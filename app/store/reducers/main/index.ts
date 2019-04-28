import { combineReducers } from 'redux';

import { modalsReducer } from './modals';

export function mainReducer() {
  return combineReducers({
    modals: modalsReducer,
  });
}
