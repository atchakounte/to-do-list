import React from "react";
import "./ToDoListTask.css";

export default function ToDoListTask({ taskNum, task }) {
  const [isTaskCompleted, setTaskCompleted] = React.useState(false);

  const taskContent = !isTaskCompleted ? (
    <p>
      task {taskNum}: {task}
    </p>
  ) : (
    <p className="strike-through">
      task {taskNum}: {task}
    </p>
  );

  return <div className="task-item">{taskContent}</div>;
}

// export default ToDoListTask;
