// src/pages/Home.jsx
// export const Home = () => <h1>Home Page</h1>;

// import { useState } from "react";

// import TaskForm from "./components/TaskForm/TaskForm";
// import TasksContainer from "./components/TasksContainer/TasksContainer";
// import PageMenu from "./components/PageMenu/PageMenu";

import TasksContainer from "../../components/TasksContainer/TasksContainer";

// import "./App.css";
//import "./Home.css";

function Incomplete({ tasks, deleteTask }) {
  // const completedTasks = tasks.filter((myTask) => myTask.isDone === true);

  return (
    <div className="Incompleted-app">
      <header className="Home-app-header">Completed Tasks</header>
      <main>
        <TasksContainer
          tasks={tasks.filter((myTask) => myTask.isDone === "false")}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default Incomplete;
