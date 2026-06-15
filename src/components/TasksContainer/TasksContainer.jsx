import React from "react";
import ToDoListTask from "../ToDoListTask/ToDoListTask";
import "./TasksContainer.css";

export default function TasksContainer({
  tasks,
  deleteTask,
  updateTaskIsDone,
}) {
  const taskList = tasks.map((myTask) => (
    <ToDoListTask
      taskNum={myTask.taskNum}
      task={myTask.task}
      isDone={myTask.isDone}
      key={myTask.task}
      deleteTask={deleteTask}
      updateTaskIsDone={updateTaskIsDone}
    />
  ));
  return <section className="tasks-container">{taskList}</section>;
}
