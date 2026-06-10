import "./App.css";
import ListItem from "./components/ListItem/ListItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">To-Do List App</header>
      <main>
        <ListItem taskNum="1" task="work on project" />
        <ListItem taskNum="2" task="file your taxes" />
      </main>
    </div>
  );
}

export default App;
