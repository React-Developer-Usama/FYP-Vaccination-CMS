import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import "./udatedoseform.css";
const UpdateDoseForm = () => {
  return (
    <div className="body_section">
      <div className="update_does_heading">
        <Heading name="Update Does" />
      </div>
      <div className="update_does_form">
        <form>
          <div>
            <label>Select Does</label>
            <select>
              <option>Select Dose</option>
              <option>Select Dose</option>
              <option>Select Dose</option>
              <option>Select Dose</option>
            </select>
          </div>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Batch</label>
            <input type="text" />
          </div>
          <div>
            <label>Total</label>
            <input type="text" />
          </div>
          <div>
            <label>Issue</label>
            <input type="text" />
          </div>
          <div className="loss_feild">
            <label>Loss</label>
            <input type="text" />
          </div>
          <div className="update_does_form_btn">
            <Button name="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDoseForm;
