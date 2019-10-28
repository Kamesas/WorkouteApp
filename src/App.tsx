import React from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>MobX starter</h3>
      <Todo />
    </div>
  );
};

export default App;
