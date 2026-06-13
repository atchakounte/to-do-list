import React from "react";
import "./TaskForm.css";

const TaskForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const taskNumField = document.querySelector("[name=taskNum]");
    const taskField = document.querySelector("[name=task]");

    const taskNumValue = taskNumField.value;
    const taskValue = taskField.value;

    taskNumField.value = "";
    taskField.value = "";

    alert(`${taskNumValue} - ${taskValue}`);
  };
  return (
    <section class="task-form">
      <h2>New Task</h2>
      <form action="#" method="GET" onSubmit={handleSubmit}>
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
};

export default TaskForm;
