import React from "react";
import InventoryDailyReprotData from "../../components/InventoryDailyReprot/InventoryDailyReprotData";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
const InventoryDailyReport = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventory Admin" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <InventoryDailyReprotData />
      </div>
    </>
  );
};

export default InventoryDailyReport;
