import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import TodoApp from "./components/TodoApp/TodoApp";
import TodoAppHooks from "./components/TodoApp/TodoAppHooks";
import TodoAppHooksApi from "./components/TodoApp/TodoAppHookApi";

const App: React.FC = () => {
  return (
    <div className="App">
      Redux Starter
      <Counter />
      <hr />
      <TodoAppHooksApi />
      <hr />
      <TodoApp />
      <hr />
      <TodoAppHooks />
      <hr />
    </div>
  );
};

export default App;
