import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import ChildProfileForm from "../../components/ChildProfileData/ChildProfileForm";
const ChildProfile = () => {
  return (
    <>
      <div>
        <Topbar headingName="Vaccination Officer" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <ChildProfileForm />
      </div>
    </>
  );
};
export default ChildProfile;
