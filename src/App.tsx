import React from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
//import Counter from "./components/Counter/Counter";
//import TodoApp from "./components/TodoApp/TodoApp";
import TodoAppHooksApi from "./components/TodoApp/TodoAppHookApi";
import TodoAppHooks from "./components/TodoApp/TodoAppHooks";

const App: React.FC = () => {
  return (
    <div className="App">
      <Auth />
      Redux Starter
      {/*   <Counter />
      <hr /> */}
      <TodoAppHooksApi />
      {/*   <hr />
      <TodoApp />
      <hr /> */}
      <TodoAppHooks />
      <hr />
    </div>
  );
};

export default App;
