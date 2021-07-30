import { createEvent } from "@testing-library/react";
import React from "react";
import "./button.css";
const Button = (props) => {
  return (
    <>
      <div className="btn">
        {/* Button Type and Text */}
        <button type={props.type}>{props.name}</button>
      </div>
    </>
  );
};
export default Button;
