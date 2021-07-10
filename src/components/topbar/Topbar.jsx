import React from "react";
import { BiBell } from "react-icons/bi";
import "./topbar.css";

export default function Topbar(props) {
  return (
    <div className="topbar_section">
      <div className="left_topbar">
        <div className="topbar_logo">
          <h2>{props.headingName}</h2>
        </div>
      </div>
      <div className="right_topbar">
        <div className="user_section">
          <div className="bell_icon">
            <i>
              <BiBell />
            </i>
            <span></span>
          </div>
          <div className="login_user">
            <p>Muhammad Usama</p>
          </div>
        </div>
      </div>
    </div>
  );
}
