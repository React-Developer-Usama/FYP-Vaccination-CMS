import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Topbar from "../../components/topbar/Topbar";
import BodySection from "../../components/body_section/BodySection";

const Dashboard = () => {
  return (
    <>
      <div>
        <Topbar headingName="Location Manager" />
      </div>
      <div className="dashborad_section">
        <Navbar />
        <BodySection />
      </div>
    </>
  );
};
export default Dashboard;
