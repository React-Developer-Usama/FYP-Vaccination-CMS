import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import DataEnteryForm from "../../components/DataEnteryForm/DataEnteryForm";
const DataEntery = () => {
  return (
    <>
      <div>
        <Topbar headingName="Inventory Admin" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <DataEnteryForm />
      </div>
    </>
  );
};
export default DataEntery;
