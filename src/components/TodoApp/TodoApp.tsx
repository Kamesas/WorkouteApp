import React, { useContext, useEffect } from "react";
import Task from "./Task";
import { observer } from "mobx-react";
import FormAddTask from "./FormAddTask";
import { RootStoreContext } from "../../store/RootStore";

const TodoApp: React.FC = () => {
  const {
    bigTodoStore: { activeTasksCount, sortedTasks, doneTask, deleteTask, fetchTodos }
  } = useContext(RootStoreContext);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

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
