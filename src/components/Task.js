import TaskItem from "./taskItem";

const task = ({ getTask, getBtn, onToggle }) => {
  return (
    <div>
      {getTask.map((task) => {
        return (
          <TaskItem
            getTask={task}
            getBtn={getBtn}
            key={task.id}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default task;
