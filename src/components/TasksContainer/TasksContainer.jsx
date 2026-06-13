import React from "react";
import "./TasksContainer.css";

export default function TasksContainer({ taskList }) {
  return <section className="tasks-container">{taskList}</section>;
}
