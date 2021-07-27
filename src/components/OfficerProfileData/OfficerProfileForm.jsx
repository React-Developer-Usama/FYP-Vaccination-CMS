import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import "./officerprofileform.css";
const OfficerProfileForm = () => {
  return (
    <>
      <div className="body_section">
        <div className="data_entery_form_section">
          <div className="officer_profile_heading">
            <Heading name="Officer Profile" />
          </div>
          <div className="officer_profile_form">
            <Heading name="Officer Profile" />
            <form>
              <div>
                <label>ID </label>
                <input type="text" />
              </div>
              <div>
                <label>Name </label>
                <input type="text" />
              </div>
              <div>
                <label>Father Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Phone</label>
                <input type="number" />
              </div>
              <div>
                <label>Province</label>
                <input type="text" />
              </div>
              <div>
                <label>District</label>
                <input type="text" />
              </div>
              <div>
                <label>Tehsil</label>
                <input type="text" />
              </div>
              <div>
                <label>UC</label>
                <input type="text" />
              </div>
              <div>
                <label>Address</label>
                <input type="text" />
              </div>
              <div>
                <label>DOB</label>
                <input type="text" />
              </div>
              <div className="officer_profile_form_btn">
                <Button name="Submite" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficerProfileForm;
