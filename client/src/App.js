import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
