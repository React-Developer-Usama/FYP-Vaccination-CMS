import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import UpdateDoseForm from "../../components/UpdateDoseData/UpdateDoseForm";
const UpdateDose = () => {
  return (
    <>
      <div>
        <Topbar headingName="Update Dose" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <UpdateDoseForm />
      </div>
    </>
  );
};

export default UpdateDose;
