import { combineReducers } from 'redux';
import { mainReducer } from './main';

export function createRootReducer() {
  return combineReducers({
    main: mainReducer(),
  });
}
