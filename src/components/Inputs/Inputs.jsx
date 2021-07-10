import React from "react";
import "./inputs.css";
const Inputs = (props) => {
  return (
    <>
      <div className="input">
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    </>
  );
};

export default Inputs;
