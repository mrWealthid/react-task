// import TaskItem from "./taskItem";

// const Task = ({ myTask, deleteBtn }) => {
//   return (
//     <>
//       {myTask.map((items) => (
//         <TaskItem task={items} key={items.id} deleteBtn={deleteBtn} />
//       ))}
//     </>
//   );
// };

// export default Task;

const gg = [
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
];

aa = JSON.stringify(gg);

console.log(aa);
