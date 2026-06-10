import React from "react";
import "./ListItem.css";

export default function ListItem({ taskNum, task }) {
  const [isTaskCompleted, setTaskCompleted] = React.useState(false);

  return (
    <div className="list-item">
      <p>
        task {taskNum}: {task}
      </p>
    </div>
  );
}

// export default ListItem;
