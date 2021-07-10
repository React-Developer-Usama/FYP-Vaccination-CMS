import React from "react";
import Heading from "../Heading/Heading";
import Inputs from "../Inputs/Inputs";
import Button from "../Button/Button";
import "./userprofileform.css";
const UserProfileForm = () => {
  return (
    <>
      <div className="body_section">
        <div className="data_entery_form_section">
          <div className="data_entery_form_heading">
            <Heading name="User Profile" />
          </div>
          <div className="data_entery_form user_profile_form">
            <Heading name="User Profile" />
            <form>
              <div classNamef="id_feild">
                <label>ID </label>
                <Inputs type="text" />
              </div>
              <div classNamef="name_feild">
                <label>Name </label>
                <Inputs type="text" />
              </div>
              <div classNamef="fathername_feild">
                <label>Father Name</label>
                <Inputs type="text" />
              </div>
              <div classNamef="cnic_feild">
                <label>CNIC</label>
                <Inputs type="number" />
              </div>
              <div classNamef="phone_feild">
                <label>Phone</label>
                <Inputs type="number" />
              </div>
              <div classNamef="address_feild">
                <label>Address</label>
                <Inputs type="text" />
              </div>
              <div classNamef="post_feild">
                <label>Post</label>
                <Inputs type="text" />
              </div>
              <div classNamef="uc_job_feild">
                <label>UC of Job</label>
                <Inputs type="text" />
              </div>
              <div className="user_profile_form_btn">
                <Button name="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfileForm;
