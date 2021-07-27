import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import ListOfficerData from "../../components/ListOfficerData/ListOfficerData";

const ListOfficer = () => {
  return (
    <>
      <div>
        <Topbar headingName="Vaccination Officer" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <ListOfficerData />
      </div>
    </>
  );
};

export default ListOfficer;
