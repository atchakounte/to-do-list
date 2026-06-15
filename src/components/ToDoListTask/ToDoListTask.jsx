// import { useState } from "react";
import "./ToDoListTask.css";

export default function ToDoListTask({
  taskNum,
  task,
  isDone,
  deleteTask,
  updateTaskIsDone,
}) {
  // const [isTaskCompleted, setTaskCompleted] = useState(false);

  // const taskContent = !isTaskCompleted ? (
  const taskContent =
    isDone === "false" ? (
      <p>
        task {taskNum}: {task}
      </p>
    ) : (
      <p className="strike-through">
        task {taskNum}: {task}
      </p>
    );

  const handleStrikethrough = (/*e*/) => {
    // e.preventDefault(); // in case of form fields
    //isDone = "true";
    //setTaskCompleted(!isTaskCompleted);
    updateTaskIsDone(task, "true");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteTask(task);
  };

  return (
    <div className="task-item" onClick={handleStrikethrough}>
      <span className="delete-task" onClick={handleDelete}>
        X
      </span>
      {taskContent}
    </div>
  );
}

// export default ToDoListTask;
