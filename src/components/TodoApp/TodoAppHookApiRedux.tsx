import React, { useEffect } from "react";
import { getTodos } from "../../store/actions/actionsTodosAPI";
import { ITodoItem } from "../../store/actions/typesTodos";
import FormAddTodoApi from "./FormAddTodoApi";
import { useSelector, useDispatch } from "react-redux";

interface IProps {
  [key: string]: any;
}

const TodoAppHooksApiRedux: React.FC<IProps> = () => {
  const todos = useSelector((state: any) => state.todoFirestore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="TodoAppHooks">
      <div>TodoAppHooks API with redux</div>
      <FormAddTodoApi />

      {todos.loading
        ? "loading"
        : todos.todoList.map((todo: ITodoItem) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
    </div>
  );
};

export default TodoAppHooksApiRedux;
