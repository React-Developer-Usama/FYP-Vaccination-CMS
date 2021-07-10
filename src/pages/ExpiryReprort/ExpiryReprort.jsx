import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import ExpiryReprortData from "../../components/ExpiryReprortData/ExpiryReportTabel";
const ExpiryReprort = () => {
  return (
    <>
      <div>
        <Topbar headingName="inventory Admin" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <ExpiryReprortData />
      </div>
    </>
  );
};

export default ExpiryReprort;
