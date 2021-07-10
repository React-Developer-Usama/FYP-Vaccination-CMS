import React from "react";
import Heading from "../Heading/Heading";
import Inputs from "../Inputs/Inputs";
import Button from "../Button/Button";
import BgImage from "../../assets/bg.png";
import "./logindata.css";
const LoginData = () => {
  return (
    <>
      <div className="login_section">
        <div className="login_feilds">
          <div className="loging_heading">
            <Heading name="Login" />
          </div>
          <div className="login_form">
            <form>
              <div className="name_input">
                <Inputs type="text" placeholder="User Name" />
              </div>
              <div className="password_input">
                <Inputs type="password" placeholder="Password" />
              </div>
              <div className="forget_remember_section">
                <div className="remember_password_text">
                  <input type="checkbox" /> Remember Me
                </div>
                <div className="forget_password_text">
                  <a href="#">Forget Password?</a>
                </div>
              </div>
              <div className="login_btn">
                <Button name="Login" />
              </div>
            </form>
          </div>
        </div>
        <div className="login_img">
          <img src={BgImage} alt="Banner" />
        </div>
      </div>
    </>
  );
};
export default LoginData;
