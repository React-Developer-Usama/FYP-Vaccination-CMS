import React from "react";
import "./heading.css";

export default function Heading(props) {
  return (
    <div className="heading">
      <h2>{props.name}</h2>
    </div>
  );
}
