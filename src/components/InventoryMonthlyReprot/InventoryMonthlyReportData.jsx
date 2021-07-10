import React from "react";
import Heading from "../Heading/Heading";
import "./inventorymonthlyreport.css";

const InventoryMonthlyReportData = () => {
  return (
    <div className="body_section">
      <div className="inventory_monthly_tabel_section">
        <div className="inventory_monthly_heading">
          <Heading name="Monthly Reports" />
        </div>
        <div className="inventory_monthly_tabel">
          <Heading name="Inventory Monthly Reports" />
          <table>
            <thead>
              <tr>
                <td>Batch No</td>
                <td>Name</td>
                <td>Used Total</td>
                <td>Lost Total</td>
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
                <td>China</td>
                <td>Aug/10/2021</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Ali </td>
                <td>02</td>
                <td>1000</td>
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

export default InventoryMonthlyReportData;
