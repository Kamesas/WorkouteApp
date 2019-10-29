import React, { useContext } from "react";
import { observer } from "mobx-react";
import { TodoStoreContext } from "./store/TodoStore";
import TodoApp from "./components/TodoApp/TodoApp";

const App = observer(() => {
  const { todos, remainingTodos, toggleTodo } = useContext(TodoStoreContext);

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
