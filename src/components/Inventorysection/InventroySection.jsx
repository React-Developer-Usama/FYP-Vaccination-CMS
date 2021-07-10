import React from "react";
import Heading from "../Heading/Heading";
import "./inventroysection.css";
const inventory_card_data = [
  { name: "Data Entery", avrage: 20 },
  { name: "Record Details", avrage: 90 },
  { name: "Daily Reports", avrage: 40 },
  { name: "Monthly Reports", avrage: 20 },
  { name: "Expiry Reports", avrage: 30 },
];
const inventory_card_map = (values) => {
  return (
    <div className="inventory_card">
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
const InventroySection = () => {
  return (
    <>
      <div className="body_section">
        <div className="dashboard_heading">
          <Heading name="Inventroy" />
        </div>
        <div className="inventory_card_section">
          {inventory_card_data.map(inventory_card_map)}
        </div>
      </div>
    </>
  );
};
export default InventroySection;
