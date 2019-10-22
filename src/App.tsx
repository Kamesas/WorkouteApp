import React from 'react';
import './App.css';
import Counter from "./components/Counter";


const App: React.FC = () => {
  return (
    <div className="App">
     <h3>MobX starter</h3>
      <Counter />
    </div>
  );
};

export default App;
