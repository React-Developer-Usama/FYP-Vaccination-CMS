import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Inputs from "../Inputs/Inputs";
// import Button from "../Button/Button";
import "./childprofileform.css";
const ChildProfileForm = () => {
  return (
    <>
      <div className="body_section">
        <div className="data_entery_form_section">
          <div className="data_entery_form_heading">
            <Heading name="Child Profile" />
          </div>
          <div className="data_entery_form child_profile_form">
            <Heading name="Child Profile" />
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
              <div classNamef="phone_feild">
                <label>Phone</label>
                <Inputs type="number" />
              </div>
              <div classNamef="province_feild">
                <label>Province</label>
                <Inputs type="text" />
              </div>
              <div classNamef="district_feild">
                <label>District</label>
                <Inputs type="text" />
              </div>
              <div classNamef="tehsil_feild">
                <label>Tehsil</label>
                <Inputs type="text" />
              </div>
              <div classNamef="uc_feild">
                <label>UC</label>
                <Inputs type="text" />
              </div>
              <div classNamef="address_feild">
                <label>Address</label>
                <Inputs type="text" />
              </div>
              <div classNamef="dob_feild">
                <label>DOB</label>
                <Inputs type="text" />
              </div>
              <div className="child_profile_form_btn">
                <Button name="Submite" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChildProfileForm;
