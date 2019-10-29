import React, { useContext } from "react";
import BigTodoStore from "../../store/BigTodoStore";
import Task from "./Task";
import { observer } from "mobx-react";
import FormAddTask from "./FormAddTask";

const TodoApp: React.FC = () => {
  const { activeTasksCount, sortedTasks, doneTask, deleteTask } = useContext(BigTodoStore);

  return (
    <div className="TodoApp">
      <FormAddTask />
      <h1 className="TodoApp-activeTasks">Active tasks: {activeTasksCount}</h1>
      {sortedTasks.map(task => (
        <Task key={task.id} task={task} doneTask={doneTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default observer(TodoApp);
