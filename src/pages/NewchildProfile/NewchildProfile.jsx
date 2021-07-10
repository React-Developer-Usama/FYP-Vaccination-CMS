import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import NewChildProfileForm from "../../components/NewChildProfileData/NewChildProfileForm";

const NewchildProfile = () => {
  return (
    <>
      <div>
        <Topbar headingName="Vaccination Officer" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <NewChildProfileForm />
      </div>
    </>
  );
};

export default NewchildProfile;
