import { createStore, compose, applyMiddleware } from 'redux';
import { createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';
import { IStore } from './model/store.interface';

const history = createMemoryHistory();

function configureStore(initialState?: IStore) {
  return createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware(history)))
  );
}

export default { configureStore, history };
