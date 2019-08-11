import { applyMiddleware, compose, createStore } from 'redux';

import { routerMiddleware } from 'connected-react-router';
import { createMemoryHistory } from 'history';

import { IStore } from './model/store.interface';
import createRootReducer from './reducers';

const history = createMemoryHistory();

function configureStore(initialState?: IStore) {
  return createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
}

export default { configureStore, history };
