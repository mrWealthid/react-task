import React, { useState } from "react";

const Form = ({ addedTask }) => {
  const [text, addText] = useState("");
  const [day, addDay] = useState("");
  const [reminder, addReminder] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Fill in Your Details");
    } else {
      addedTask({ text, day, reminder });

      addText("");
      addDay("");
      addReminder(false);
    }
  };
  return (
    <form className="form-class" onSubmit={formSubmit}>
      <div className="form-control">
        <label>Task</label>

        <input
          type="text"
          placeholder="Enter Task"
          value={text}
          onChange={(e) => addText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Time</label>

        <input
          type="text"
          placeholder="Enter Date & Time"
          value={day}
          onChange={(e) => addDay(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>
          Reminder
          <input
            type="checkbox"
            checked={reminder}
            onChange={(e) => addReminder(e.currentTarget.checked)}
          />
        </label>
      </div>
      <div className="form-control">
        <input type="submit" value="save task" />
      </div>
    </form>
  );
};

export default Form;
