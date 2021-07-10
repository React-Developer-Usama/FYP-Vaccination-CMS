import React from "react";
import Heading from "../Heading/Heading";
import "./recorddetailstabel.css";
const RecordDetailsTabel = () => {
  return (
    <div className="body_section">
      <div className="record_tabel_section">
        <div className="record_tabel_heading">
          <Heading name="Record Details" />
        </div>
        <div className="record_tabel">
          <Heading name="Inventory Record Details" />
          <table>
            <thead>
              <tr>
                <td>Batch No</td>
                <td>Name</td>
                <td>Seriol No</td>
                <td>Manufacture</td>
                <td>Expiry Data</td>
                <td>Received Doses</td>
                <td>Issued Doses</td>
                <td>Loss Doses</td>
                <td>Balance Doses</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>97</td>
                <td>Ali </td>
                <td>02</td>
                <td>China</td>
                <td>Aug/10/2021</td>
                <td>1000</td>
                <td>500</td>
                <td>20</td>
                <td>1600</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Ali </td>
                <td>02</td>
                <td>China</td>
                <td>Aug/10/2021</td>
                <td>1000</td>
                <td>500</td>
                <td>20</td>
                <td>1600</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Ali </td>
                <td>02</td>
                <td>China</td>
                <td>Aug/10/2021</td>
                <td>1000</td>
                <td>500</td>
                <td>20</td>
                <td>1600</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Ali </td>
                <td>02</td>
                <td>China</td>
                <td>Aug/10/2021</td>
                <td>1000</td>
                <td>500</td>
                <td>20</td>
                <td>1600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecordDetailsTabel;
