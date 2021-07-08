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

// import Header from "./components/Header";
// import "./App.css";
// import Task from "./components/Task";
// import { useState, useEffect } from "react";
// import Form from "./components/Form";

// function App() {
//   const [showForm, hideForm] = useState(false);
//   const [tasks, setTask] = useState([]);

//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchData();
//       setTask(tasksFromServer);
//     };

//     getTasks();
//   }, []);

//   const fetchData = async () => {
//     const res = await fetch("http://localhost:5000/posts");
//     const data = await res.json();
//     return data;
//   };

//   const fetchData2 = async (id) => {
//     const res = await fetch(`http://localhost:5000/posts/${id}`);
//     const data = await res.json();
//     return data;
//   };

//   // Delete Tasks
//   const deleteTask = async (id) => {
//     await fetch(`http://localhost:5000/posts/${id}`, { method: "DELETE" });
//     setTask(tasks.filter((task) => task.id !== id));
//   };

//   // Adding a task

//   const addTask = async (task) => {
//     const res = await fetch("http://localhost:5000/posts/", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(task),
//     });

//     const data = await res.json();
//     setTask([...tasks, data]);
//   };

//   //toggle Reminder
//   const toggleReminder = async (id) => {
//     const taskToggle = await fetchData2(id);

//     const updatedTask = {
//       ...taskToggle,
//       reminder: !taskToggle.reminder,
//     };

//     const response = await fetch(`http://localhost:5000/posts/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(updatedTask),
//     });

//     const data = await response.json();

//     setTask(
//       tasks.map((task) =>
//         task.id === id ? { ...task, reminder: data.reminder } : task
//       )
//     );
//   };

//   return (
//     <div>
//       <Header formHide={() => hideForm(!showForm)} showform={showForm} />
//       {showForm && <Form addedTask={addTask} />}

//       {tasks.length > 0 ? (
//         <Task getTask={tasks} getBtn={deleteTask} onToggle={toggleReminder} />
//       ) : (
//         <h5>No Task Available</h5>
//       )}
//     </div>
//   );
// }

// export default App;
