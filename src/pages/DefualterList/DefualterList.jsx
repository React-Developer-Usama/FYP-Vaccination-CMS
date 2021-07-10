import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import DefualterListTabel from "../../components/DefualterListData/DefualterListTabel";

const DefualterList = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventory Admin" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <DefualterListTabel />
      </div>
    </>
  );
};

export default DefualterList;
