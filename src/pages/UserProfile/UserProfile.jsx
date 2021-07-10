import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import UserProfileForm from "../../components/UserProfileData/UserProfileForm";
const UserProfile = () => {
  return (
    <>
      <div>
        <Topbar headingName="Vaccination Officer" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <UserProfileForm />
      </div>
    </>
  );
};

export default UserProfile;
