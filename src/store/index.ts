import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import todosReducer from "./reducers/todosReducer";
import todoFirestore from "./reducers/todosAPIReducer";
import { workoutStore } from "./reducers/workoutReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  todoFirestore,
  workoutStore
});

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
