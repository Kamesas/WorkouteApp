import React from "react";
import "./App.css";
import { autonReplace } from "./functions/packNeedFunc/autoRaplace";
import { repeatArgs } from "./functions/packNeedFunc/repeatArg";

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>Apps functions</h3>
      <div> {autonReplace()}</div>
      <div> {repeatArgs()}</div>
    </div>
  );
};

export default App;
