import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import recoverimage from "../../assets/bg-2.png";
import "./recoverpasswordform.css";
const RecoverPasswordForm = () => {
  return (
    <div className="recover_password_section">
      <div className="recover_password_form_section">
        <div className="recover_password_heading">
          <Heading name="Recovery Password" />
        </div>
        <form>
          <div>
            <label>Pleac Enter Your Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="recover_password_btn">
            <Button name="Recover" />
          </div>
        </form>
      </div>
      <div className="recover_password_img_section">
        <img src={recoverimage} alt="recoverimage" />
      </div>
    </div>
  );
};

export default RecoverPasswordForm;
