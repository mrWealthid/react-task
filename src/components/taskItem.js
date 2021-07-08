import { FaTimes } from "react-icons/fa";

const logoStyle = {
  color: "Red",
};

const taskItem = ({ getTask, getBtn, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(getTask.id)}
      className={`schedule ${getTask.reminder === true ? "reminder" : ""}`}
    >
      <h4>
        {getTask.text}
        <FaTimes onClick={() => getBtn(getTask.id)} style={logoStyle} />
      </h4>
      <small>{getTask.day}</small>
    </div>
  );
};

export default taskItem;
