import React from "react";
import Heading from "../Heading/Heading";
import "./bodysection.css";

const Dashboard_card_data = [
  { name: "Inventory", avrage: 60 },
  { name: "Immunization", avrage: 50 },
  { name: "Profile create", avrage: 70 },
  { name: "Reports", avrage: 80 },
  { name: "Poilio", avrage: 55 },
];
const DashboardMap = (values) => {
  return (
    <div className="dashboard_card">
      <div className="cards">
        <div className="card_avrage">
          <h3>{values.avrage}</h3>
        </div>
        <div className="card_text">
          <h3>{values.name}</h3>
        </div>
      </div>
    </div>
  );
};
const BodySection = () => {
  return (
    <div className="body_section">
      <div className="dashboard_heading">
        <Heading name="Dashboard" />
      </div>
      <div className="dashboard_card_section">
        {Dashboard_card_data.map(DashboardMap)}
      </div>
    </div>
  );
};
export default BodySection;
