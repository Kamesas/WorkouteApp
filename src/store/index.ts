import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { counterReducer } from "./reducers/counterReducer";
import todosReducer from "./reducers/todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

  return store;
}
