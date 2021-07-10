import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import "./updateprofileform.css";
const UpdateProfileForm = () => {
  return (
    <div className="update_profile_section">
      <div className="update_profile_heading">
        <Heading name="Update Profile" />
      </div>
      <div className="update_profile_form">
        <form>
          <div className="image_felid">
            <input type="file" />
          </div>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Father Name</label>
            <input type="text" />
          </div>
          <div>
            <label>CNIC</label>
            <input type="number" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" />
          </div>
          <div>
            <label>Post</label>
            <input type="text" />
          </div>
          <div>
            <label>UC of Job</label>
            <input type="text" />
          </div>
          <div className="update_profile_btn">
            <Button name="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
