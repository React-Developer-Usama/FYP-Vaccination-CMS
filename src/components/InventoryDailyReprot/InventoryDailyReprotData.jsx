import React from "react";
import Heading from "../Heading/Heading";
import "./inventorydailyreprot.css";

const InventoryDailyReprotData = () => {
  return (
    <div className="body_section">
      <div className="inventory_daily_tabel_section">
        <div className="inventory_daily_heading">
          <Heading name="Daily Reports" />
        </div>
        <div className="inventory_daily_tabel">
          <Heading name="Inventory Daily Reports" />
          <table>
            <thead>
              <tr>
                <td>Batch No</td>
                <td>Name</td>
                <td>Used Total</td>
                <td>Lost Total</td>
                <td>Balance</td>
                <td>Manufacture</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>97</td>
                <td>Ali </td>
                <td>02</td>
                <td>1000</td>
                <td>10</td>
                <td>China</td>
                <td>Aug/10/2021</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Ali </td>
                <td>02</td>
                <td>1000</td>
                <td>10</td>
                <td>China</td>
                <td>Aug/10/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryDailyReprotData;
