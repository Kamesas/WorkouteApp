import React, { useContext } from "react";
import { observer } from "mobx-react";
import TodoApp from "./components/TodoApp/TodoApp";
import { RootStoreContext } from "./store/RootStore";

const App = observer(() => {
  const {
    todotStore: { todos, remainingTodos, toggleTodo }
  } = useContext(RootStoreContext);

  return (
    <div className="App">
      <h3>MobX with hooks starter</h3>
      <div>Is done => {remainingTodos}</div>

      {todos.map((item, i) => (
        <div key={item.id} onClick={() => toggleTodo(i)}>
          {item.text}
        </div>
      ))}

      <hr />

      <TodoApp />
    </div>
  );
});

export default App;
