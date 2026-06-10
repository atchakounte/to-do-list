import "./App.css";
import ToDoListTask from "./components/ToDoListTask/ToDoListTask";
import { useState } from "react";

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
      task: "Text partner to see if they are free this Friday, then book a table at favorites restaurant.",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">To-Do List App</header>
      <main className="to-do-list-container">
        <ToDoListTask taskNum={tasks[0].taskNum} task={tasks[0].task} />
        <ToDoListTask taskNum={tasks[1].taskNum} task={tasks[1].task} />
        <ToDoListTask taskNum={tasks[2].taskNum} task={tasks[2].task} />
        <ToDoListTask taskNum={tasks[3].taskNum} task={tasks[3].task} />
        <ToDoListTask taskNum={tasks[4].taskNum} task={tasks[4].task} />
        <ToDoListTask taskNum={tasks[5].taskNum} task={tasks[5].task} />
      </main>
    </div>
  );
}

export default App;
