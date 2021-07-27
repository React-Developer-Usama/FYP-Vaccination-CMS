import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import OfficerProfileForm from "../../components/OfficerProfileData/OfficerProfileForm";

const OfficerProfile = () => {
  return (
    <>
      <div>
        <Topbar headingName="Officer" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <OfficerProfileForm />
      </div>
    </>
  );
};

export default OfficerProfile;
