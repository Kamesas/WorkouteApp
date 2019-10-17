import React from "react";
import "./App.css";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      Redux Starter
      <Counter />
    </div>
  );
};

export default App;
