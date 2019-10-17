import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import TodoApp from "./components/TodoApp/TodoApp";
import TodoAppHooks from "./components/TodoApp/TodoAppHooks";

const App: React.FC = () => {
  return (
    <div className="App">
      Redux Starter
      <Counter />
      <hr />
      <TodoApp />
      <hr />
      <TodoAppHooks />
    </div>
  );
};

export default App;
