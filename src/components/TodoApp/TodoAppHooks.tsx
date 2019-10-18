import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, deleteTodo, completeTodo, removeAll } from "../../store/actions/actionsTodos";
import { ITodoItem } from "../../store/actions/typesTodos";
import FormAddTodo from "./FormAddTodo";

interface IProps {
  [key: string]: any;
}

const TodoAppHooks: React.FC<IProps> = () => {
  const todos = useSelector((state: { todos: ITodoItem[] }) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="TodoAppHooks">
      <div>TodoAppHooks</div>

      <FormAddTodo />

      {todos.map(todo => {
        return (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(+todo.id))}>Del todo</button>
            <button onClick={() => dispatch(completeTodo(+todo.id))}>Done</button>
            <button onClick={() => dispatch(removeAll())}>Remove all</button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoAppHooks;
