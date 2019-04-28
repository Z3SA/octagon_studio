import { createStore } from 'redux';
import { createRootReducer } from './reducers';

// const history = createHashHistory();
const rootReducer = createRootReducer();
// const router = routerMiddleware(history);
// const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: any) {
  return createStore(rootReducer, initialState);
}

export default { configureStore, history };
