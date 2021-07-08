import React from "react";
import Button from "./Button";

const Header = ({ title, BtnColor, formHide, showform }) => {
  return (
    <header>
      <h3>{title}</h3>
      <Button
        text={showform ? "Close" : "Add"}
        formHide={formHide}
        color={showform ? "red" : BtnColor}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task-Tracker",
  BtnContent: "Add",
  BtnColor: "green",
};

export default Header;
