import axios from "axios";
import React, { useState } from "react";
import { ITodoItem } from "../../store/actions/typesTodos";

interface IProps {
  [key: string]: any;
}

const FormAddTodoApi: React.FC<IProps> = () => {
  const [titleValue, setTitleValue] = useState<string>("");

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setTitleValue(e.target.value);
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (titleValue.trim() === "") return;

    const newTodo: ITodoItem = {
      id: new Date().getTime(),
      title: titleValue,
      isDone: false
    };
    // postNewTodo(newTodo);
    postNewTodoAsync(newTodo);
    setTitleValue("");
  };

  // const postNewTodo = (newTodo: ITodoItem) => {
  //   axios.post("https://to-do-list-whis-firebase.firebaseio.com/todos.json", newTodo).catch(err => console.log(err));
  // };

  const postNewTodoAsync = async (newTodo: ITodoItem) => {
    try {
      await axios.post("https://to-do-list-whis-firebase.firebaseio.com/todos.json", newTodo);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="FormAddTodo">
      <div>FormAddTodoApi</div>
      <form onSubmit={onSubmit}>
        <input type="text" name="todoTitle" placeholder="Add a todo" value={titleValue} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormAddTodoApi;
