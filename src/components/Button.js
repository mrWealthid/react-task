import React from "react";

const Button = ({ color, text, formHide }) => {
  return (
    <div>
      <button style={{ background: color }} onClick={formHide}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "cadetblue",
};

export default Button;
