import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import DailyReportTabel from "../../components/DailyReportData/DailyReportTabel";
const DailyReport = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventory Admin" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <DailyReportTabel />
      </div>
    </>
  );
};

export default DailyReport;
