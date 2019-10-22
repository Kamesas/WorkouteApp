import React from "react";
import "./App.css";
import { ContextProvider } from "./context/Context";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <hr />
        <TodoList />
      </div>
    </ContextProvider>
  );
};

export default App;
