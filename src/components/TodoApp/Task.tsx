import React from "react";

const Task = ({ task, doneTask, deleteTask }: any) => {
  return (
    <div style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
      {task.id} ===> {task.title}
      <button onClick={() => doneTask(task.id)}>done</button>
      <button onClick={() => deleteTask(task.id)}>del</button>
    </div>
  );
};

export default Task;
