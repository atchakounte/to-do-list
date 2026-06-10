import React from "react";
import "./ListItem.css";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <p>
        task {props.taskNum}: {props.task}
      </p>
    </div>
  );
}

// export default ListItem;
