import { createStore, compose, applyMiddleware } from 'redux';
import { createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './reducers';
import { IStore } from './model/store.interface';

const history = createMemoryHistory();

const configureStore = (initialState?: IStore) => {
  // Thunk Middleware
  // middleware.push(thunk);

  // Logging Middleware
  // const logger = createLogger({
  //   level: 'info',
  //   collapsed: true,
  // });

  // Skip redux logs in console during the tests
  // if (process.env.NODE_ENV !== 'test') {
  //   middleware.push(logger);
  // }

  // Redux DevTools Configuration
  // const actionCreators = {
  //   ...counterActions,
  //   ...routerActions,
  // };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //       // Options: http://extension.remotedev.io/docs/API/Arguments.html
  //       actionCreators,
  //     })
  //   : compose;
  /* eslint-enable no-underscore-dangle */

  // Create Store
  // const store = createStore(rootReducer, initialState, enhancer);
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

  store.subscribe(() => {
    console.log(store.getState());
  });

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () =>
      store.replaceReducer(createRootReducer(history))
    );
  }

  return store;
};

export default { configureStore, history };
