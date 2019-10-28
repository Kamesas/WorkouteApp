import React from "react";
import "./App.css";
import { arrayAutoFill } from "./functions/simple/forTesting";

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>Apps functions</h3>
      {console.log(arrayAutoFill)}
    </div>
  );
};

export default App;
