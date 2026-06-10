import React from "react";
import "./ListItem.css";

export default function ListItem({ taskNum, task }) {
  return (
    <div className="list-item">
      <p>
        task {taskNum}: {task}
      </p>
    </div>
  );
}

// export default ListItem;
