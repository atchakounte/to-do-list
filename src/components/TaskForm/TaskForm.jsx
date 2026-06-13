import React from "react";
import "./TaskForm.css";

export default function TaskForm() {
  return (
    <section class="task-form">
      <h2>New Task</h2>
      <form action="#" method="GET">
        <div className="form-row">
          <label>
            Task Number:
            <input type="text" name="taskNum" placeholder="Task Number" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Task:
            <input type="text" name="task" placeholder="Task" />
          </label>
        </div>
        <div className="form-row">
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
}
