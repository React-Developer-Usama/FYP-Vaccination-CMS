import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import InventroySection from "../../components/Inventorysection/InventroySection";

const InventroyAdmin = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventroy" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <InventroySection />
      </div>
    </>
  );
};
export default InventroyAdmin;
