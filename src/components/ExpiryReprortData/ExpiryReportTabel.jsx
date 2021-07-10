import React from "react";
import Heading from "../Heading/Heading";
import "./expiryreporttabel.css";
const ExpiryReportTabel = () => {
  return (
    <div className="body_section">
      <div className="expiry_report_tabel_section">
        <div className="expiry_report_heading">
          <Heading name="Expriy Report" />
        </div>
        <div className="expiry_report_tabel">
          <Heading name="Inventory Expriy Report" />
          <table>
            <thead>
              <tr>
                <td>Batch No</td>
                <td>Name</td>
                <td>Quantity</td>
                <td>Manufacture</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04</td>
                <td>Ali Waqas</td>
                <td>20</td>
                <td>Chaini</td>
                <td>Aug/03/2021</td>
              </tr>
              <tr>
                <td>04</td>
                <td>Ali Waqas</td>
                <td>20</td>
                <td>Chaini</td>
                <td>Aug/03/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpiryReportTabel;
