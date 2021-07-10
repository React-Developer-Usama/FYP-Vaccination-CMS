import React from "react";
import "./changepasswordform.css";
import Inputs from "../Inputs/Inputs";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
const ChangePasswordForm = () => {
  const data = () => {
    alert("this");
  };
  return (
    <>
      <div className="change_password_section">
        <div className="change_password">
          <div className="change_password_heading">
            <Heading name="Change Password" />
          </div>
          <div className="change_password_form">
            <form>
              <div className="old_password_feild">
                <label>Old Password</label>
                <Inputs type="password" />
              </div>
              <div className="old_password_feild">
                <label>New Password</label>
                <Inputs type="password" />
              </div>
              <div className="old_password_feild">
                <label>Confrim Password</label>
                <Inputs type="password" />
              </div>
              <div className="change_password_btn">
                <Button onclick={data} name="Save Password" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordForm;
