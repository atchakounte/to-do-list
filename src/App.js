// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Completed from "./pages/Completed/Completed";
import Incomplete from "./pages/Incomplete/Incomplete";

function App() {
  const [tasks, setTasks] = useState([
    {
      taskNum: "1",
      task: "Book round-flight ticket and reserve 3 nights at hotel.",
      isDone: "false",
    },
    {
      taskNum: "2",
      task: "Gather W-2s and enter charitable donation receipts into the spreadsheet.",
      isDone: "false",
    },
    {
      taskNum: "3",
      task: "Wipe down kitchen counters and vacuum the living room rug.",
      isDone: "false",
    },
    {
      taskNum: "4",
      task: "Call pharmacy to request a refill on blood pressure medication.",
      isDone: "false",
    },
    {
      taskNum: "5",
      task: "Call Mom and Dad to catch up; check time zones first.",
      isDone: "false",
    },
    {
      taskNum: "6",
      task: "Book table for dinner reservations at Peter Luger's.",
      isDone: "false",
    },
  ]);

  const addTask = (taskNum, task, isDone = "false") => {
    const newTasks = [...tasks, { taskNum, task, isDone }];
    setTasks(newTasks);
  };

  const deleteTask = (task) => {
    const newTasks = tasks.filter((myTask) => myTask.task !== task);
    setTasks(newTasks);
  };

  const updateTaskIsDone = (task, newIsDone) => {
    setTasks((prevTasks) =>
      prevTasks.map((myTask) =>
        myTask.task === task ? { ...myTask, isDone: newIsDone } : myTask,
      ),
    );
  };

  const [forms, setForms] = useState([
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@abc.com",
      comment: "Enjoy using this to-do list",
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@abc.com",
      comment: "Thanks for the App, very useful",
    },
  ]);

  const addContactForm = (firstName, lastName, email, comment) => {
    const newForm = [...forms, { firstName, lastName, email, comment }];
    setForms(newForm);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              addTask={addTask}
              deleteTask={deleteTask}
              updateTaskIsDone={updateTaskIsDone}
            />
          }
        />
        <Route
          path="/contact"
          element={<Contact forms={forms} addContactForm={addContactForm} />}
        />
        <Route
          path="/completed"
          element={<Completed tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route
          path="/incomplete"
          element={<Incomplete tasks={tasks} deleteTask={deleteTask} />}
        />
      </Routes>
    </div>
  );
}

export default App;
