import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import VaccinationCards from "../../components/VaccinationCards/VaccinationCards";

const Vaccination = () => {
  return (
    <>
      <div>
        <Topbar headingName="Vaccination Officer" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <VaccinationCards />
      </div>
    </>
  );
};

export default Vaccination;
