import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/actionsTodos";
import { ITodoItem } from "../../store/actions/typesTodos";

const FormAddTodo: React.FC = () => {
  const [titleValue, setTitleValue] = useState<string>("");
  const dispatch = useDispatch();

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

    dispatch(addTodo(newTodo));

    setTitleValue("");
  };

  return (
    <div className="FormAddTodo">
      <div>FormAddTodo</div>
      <form onSubmit={onSubmit}>
        <input type="text" name="todoTitle" placeholder="Add a todo" value={titleValue} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormAddTodo;
