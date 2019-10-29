import React, { useState, useContext } from "react";
import { observer } from "mobx-react";
import { RootStoreContext } from "../../store/RootStore";

const FormAddTask = () => {
  const [value, setValue] = useState("");
  const {
    bigTodoStore: { addTask }
  } = useContext(RootStoreContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    value && addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler} className="FormAddTask">
      <input type="text" value={value} onChange={({ target }) => setValue(target.value)} />
    </form>
  );
};

export default observer(FormAddTask);
