import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import RecordDetailsTabel from "../../components/RecordDetails/RecordDetailsTabel";

const RecordDetails = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventory" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <RecordDetailsTabel />
      </div>
    </>
  );
};

export default RecordDetails;
