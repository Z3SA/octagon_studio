import { createStore, compose, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from './reducers';

export const history = createHashHistory();
const rootReducer = createRootReducer(history);

function configureStore(initialState?: any) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
}

export default { configureStore, history };
