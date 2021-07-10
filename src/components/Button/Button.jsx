import { createEvent } from "@testing-library/react";
import React from "react";
import "./button.css";
const Button = (props) => {
  return (
    <>
      <div className="btn">
        <button>{props.name}</button>
      </div>
    </>
  );
};
export default Button;
