import { combineReducers } from 'redux';

import { modalsReducer } from './modals';
import { environmentReducer } from './environment';

export function mainReducer() {
  return combineReducers({
    modals: modalsReducer,
    environment: environmentReducer,
  });
}
