import Header from "./components/Header";
import "./App.css";
import Task from "./components/Task";
import { useState } from "react";
import Form from "./components/Form";
function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Building Projects",
      day: "13 June at 3.30am",
      reminder: false,
    },
    {
      id: 2,
      text: "Testing Projects",
      day: "15 June at 3.30am",
      reminder: true,
    },
    {
      id: 3,
      text: "Promoting Projects",
      day: "20 June at 3.30am",
      reminder: true,
    },
    { id: 4, text: "Getting Hired", day: "12 June at 3.30am", reminder: true },
  ]);

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const [showForm, hideForm] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100);
    const addedId = { ...task, id };
    setTask([...tasks, addedId]);
  };

  return (
    <div>
      <Header formHide={() => hideForm(!showForm)} showform={showForm} />
      {showForm && <Form addedTask={addTask} />}

      {tasks.length > 0 ? (
        <Task getTask={tasks} getBtn={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task Available"
      )}
    </div>
  );
}

export default App;
