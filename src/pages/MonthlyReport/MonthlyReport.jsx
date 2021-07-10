import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import MonthlyReportTabel from "../../components/MonthlyReportData/MonthlyReportTabel";
const MonthlyReport = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventory Admin" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <MonthlyReportTabel />
      </div>
    </>
  );
};

export default MonthlyReport;
