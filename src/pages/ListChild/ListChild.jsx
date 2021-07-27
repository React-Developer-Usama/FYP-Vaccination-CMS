import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import ListChildData from "../../components/ListChildData/ListChildData";
const ListChild = () => {
  return (
    <>
      <div>
        <Topbar headingName="Vaccination Officer" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <ListChildData />
      </div>
    </>
  );
};

export default ListChild;
