import Header from "./components/Header";
import "./App.css";
import Task from "./components/Task";
import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [showForm, hideForm] = useState(false);
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchData();
      setTask(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    return data;
  };

  const fetchData2 = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`);
    const data = await res.json();
    return data;
  };

  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/posts/${id}`, { method: "DELETE" });
    setTask(tasks.filter((task) => task.id !== id));
  };

  // Adding a task

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/posts/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTask([...tasks, data]);
  };

  //toggle Reminder
  const toggleReminder = async (id) => {
    const taskToggle = await fetchData2(id);

    const updatedTask = {
      ...taskToggle,
      reminder: !taskToggle.reminder,
    };

    const response = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await response.json();

    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div>
      <Header formHide={() => hideForm(!showForm)} showform={showForm} />
      {showForm && <Form addedTask={addTask} />}

      {tasks.length > 0 ? (
        <Task getTask={tasks} getBtn={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h5>No Task Available</h5>
      )}
    </div>
  );
}

export default App;
