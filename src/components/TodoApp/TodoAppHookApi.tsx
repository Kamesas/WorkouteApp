import React, { useEffect, useState } from "react";
import { ITodoItem } from "../../store/actions/typesTodos";
import axios from "axios";
import FormAddTodoApi from "./FormAddTodoApi";

interface IProps {
  [key: string]: any;
}

const TodoAppHooksApi: React.FC<IProps> = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const res = await axios.get("https://to-do-list-whis-firebase.firebaseio.com/todos.json");
      const data = await res.data;

      const newArr = Object.keys(data).map(item => {
        return data[item];
      });
      setTodos(newArr);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="TodoAppHooks">
      <div>TodoAppHooks API</div>
      <FormAddTodoApi />
      {todos.map((todo: ITodoItem) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </div>
  );
};

export default TodoAppHooksApi;
