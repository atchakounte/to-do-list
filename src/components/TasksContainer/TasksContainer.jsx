import React from "react";
import ToDoListTask from "../ToDoListTask/ToDoListTask";
import "./TasksContainer.css";

export default function TasksContainer({ tasks }) {
  const taskList = tasks.map((myTask) => (
    <ToDoListTask
      taskNum={myTask.taskNum}
      task={myTask.task}
      key={myTask.task}
    />
  ));
  return <section className="tasks-container">{taskList}</section>;
}
