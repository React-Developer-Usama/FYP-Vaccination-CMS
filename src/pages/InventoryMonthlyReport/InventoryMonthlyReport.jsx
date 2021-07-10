import React from "react";
import InventoryMonthlyReportData from "../../components/InventoryMonthlyReprot/InventoryMonthlyReportData";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
const InventoryMonthlyReport = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventory Admin" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <InventoryMonthlyReportData />
      </div>
    </>
  );
};

export default InventoryMonthlyReport;
