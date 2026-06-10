import React from "react";
import "./ToDoListTask.css";

export default function ToDoListTask({ taskNum, task }) {
  const [isTaskCompleted, setTaskCompleted] = React.useState(false);

  return (
    <div className="task-item">
      <p>
        task {taskNum}: {task}
      </p>
    </div>
  );
}

// export default ListItem;
