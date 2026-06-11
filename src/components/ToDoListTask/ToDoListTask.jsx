import { useState } from "react";
import "./ToDoListTask.css";

export default function ToDoListTask({ taskNum, task }) {
  const [isTaskCompleted, setTaskCompleted] = useState(false);

  const taskContent = !isTaskCompleted ? (
    <p>
      task {taskNum}: {task}
    </p>
  ) : (
    <p className="strike-through">
      task {taskNum}: {task}
    </p>
  );

  const handleClick = (/*e*/) => {
    // e.preventDefault(); // in case of form fields
    setTaskCompleted(!isTaskCompleted);
  };

  return (
    <div className="task-item" onClick={handleClick}>
      {taskContent}
    </div>
  );
}

// export default ToDoListTask;
