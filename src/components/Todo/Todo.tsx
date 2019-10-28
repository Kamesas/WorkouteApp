import React from "react";
import { inject, observer } from "mobx-react";
import { TodoStore } from "../../store/todoStore";

interface ITodoProps {
  todoStore?: TodoStore;
  [kye: string]: any;
}

const Todo = ({ todoStore }: ITodoProps) => {
  const taskList = todoStore && todoStore.tasks;

  return (
    <div className="Todo">
      <div>Todo</div>

      <div>
        {taskList &&
          taskList.map((item: any) => {
            return (
              <li key={item.id}>
                {item.title}
                <button onClick={() => todoStore && todoStore.deleteTask(item.id)}>del</button>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default inject("todoStore")(observer(Todo));
