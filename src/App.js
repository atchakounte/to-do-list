import "./App.css";
import ToDoListTask from "./components/ToDoListTask/ToDoListTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">To-Do List App</header>
      <main className="to-do-list-container">
        <ToDoListTask
          taskNum="1"
          task="Book round-flight ticket and reserve 3 nights at hotel."
        />
        <ToDoListTask
          taskNum="2"
          task="Gather W-2s and enter charitable donation receipts into the spreadsheet."
        />
        <ToDoListTask
          taskNum="3"
          task="Wipe down kitchen counters and vacuum the living room rug."
        />
        <ToDoListTask
          taskNum="4"
          task="Call pharmacy to request a refill on blood pressure medication."
        />
        <ToDoListTask
          taskNum="5"
          task=" Call Mom and Dad to catch up; check time zones first."
        />
      </main>
    </div>
  );
}

export default App;
