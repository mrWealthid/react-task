// import "./App.css";
// import { useState } from "react";
// import Header from "./components/Header";
// import Tasks from "./components/Task";

// function App() {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       text: "Building Projects",
//       day: "13 June at 3.30am",
//       reminder: false,
//     },
//     {
//       id: 2,
//       text: "Testing Projects",
//       day: "15 June at 3.30am",
//       reminder: true,
//     },
//     {
//       id: 3,
//       text: "Promoting Projects",
//       day: "20 June at 3.30am",
//       reminder: true,
//     },
//     { id: 4, text: "Getting Hired", day: "12 June at 3.30am", reminder: true },
//   ]);

//   //delete task
//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div className="App">
//       <Header />
//       {tasks.length > 0 ? (
//         <Tasks myTask={tasks} deleteBtn={deleteTask} />
//       ) : (
//         "No Task to Show"
//       )}
//     </div>
//   );
// }

// export default App;
