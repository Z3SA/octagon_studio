import { combineReducers } from 'redux';
import { modalsReducer } from './main/modals';

// export default function createRootReducer(history) {
//   return combineReducers({
//     router: connectRouter(history),
//     counter,
//     main: {
//       modals: modalsReducer,
//     }
//   });
// }

export function createRootReducer() {
  return combineReducers({
    main: modalsReducer,
  });
}

export type RootState = ReturnType<typeof createRootReducer>;
