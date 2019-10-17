import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
