// src/pages/Home.jsx
// export const Home = () => <h1>Home Page</h1>;

// import { useState } from "react";

// import TaskForm from "./components/TaskForm/TaskForm";
// import TasksContainer from "./components/TasksContainer/TasksContainer";
// import PageMenu from "./components/PageMenu/PageMenu";

import TaskForm from "../../components/TaskForm/TaskForm";
import TasksContainer from "../../components/TasksContainer/TasksContainer";

// import "./App.css";
import "./Home.css";

function Home({ tasks, addTask, deleteTask, updateTaskIsDone }) {
  return (
    <div className="Home-app">
      <header className="Home-app-header">To-Do List App</header>
      <main>
        <TaskForm addTask={addTask} />
        <TasksContainer
          tasks={tasks}
          deleteTask={deleteTask}
          updateTaskIsDone={updateTaskIsDone}
        />
      </main>
    </div>
  );
}

export default Home;
/*

function App() {
  const [tasks, setTasks] = useState([
    {
      taskNum: "1",
      task: "Book round-flight ticket and reserve 3 nights at hotel.",
    },
    {
      taskNum: "2",
      task: "Gather W-2s and enter charitable donation receipts into the spreadsheet.",
    },
    {
      taskNum: "3",
      task: "Wipe down kitchen counters and vacuum the living room rug.",
    },
    {
      taskNum: "4",
      task: "Call pharmacy to request a refill on blood pressure medication.",
    },
    {
      taskNum: "5",
      task: "Call Mom and Dad to catch up; check time zones first.",
    },
    {
      taskNum: "6",
      task: "Book table for dinner reservations at Peter Luger's.",
    },
  ]);

  const addTask = (taskNum, task) => {
    const newTasks = [...tasks, { taskNum, task }];
    setTasks(newTasks);
  };

  const deleteTask = (task) => {
    const newTasks = tasks.filter((myTask) => myTask.task !== task);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">To-Do List App</header>
      <main>
        <PageMenu />
        <TaskForm addTask={addTask} />
        <TasksContainer tasks={tasks} deleteTask={deleteTask} />
      </main>
    </div>
  );
}
*/
