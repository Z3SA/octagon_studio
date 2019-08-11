import { combineReducers } from 'redux';

import { environmentReducer } from './environment';
import { modalsReducer } from './modals';

export function mainReducer() {
  return combineReducers({
    modals: modalsReducer,
    environment: environmentReducer,
  });
}
