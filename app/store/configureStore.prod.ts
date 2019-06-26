import { createStore, compose, applyMiddleware } from 'redux';
import { createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';

const history = createMemoryHistory();

function configureStore(initialState?: any) {
  return createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
}

export default { configureStore, history };
