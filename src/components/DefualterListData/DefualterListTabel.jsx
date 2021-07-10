import React from "react";
import Heading from "../Heading/Heading";
import "./defualterlisttabel.css";
const DefualterListTable = () => {
  return (
    <>
      <div className="body_section">
        <div className="defualter_table_section">
          <div className="defualtertable_heading">
            <Heading name="Defaulter List" />
          </div>
          <div className="defaulter_list">
            <Heading name="Defaulter List" />
            <table>
              <thead>
                <tr>
                  <td>Child ID</td>
                  <td>Name</td>
                  <td>Father.Name</td>
                  <td>UC</td>
                  <td>Tehsil</td>
                  <td>Location</td>
                  <td>Date</td>
                  <td>Profile</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09</td>
                  <td>Waqas</td>
                  <td>Ali</td>
                  <td>Umar malam</td>
                  <td>Abc</td>
                  <td>Umina malam</td>
                  <td>Mar/03/2021</td>
                  <td>
                    <a href="#">Profile</a>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Waqas</td>
                  <td>Ali</td>
                  <td>Umar malam</td>
                  <td>Abc</td>
                  <td>Umina malam</td>
                  <td>Mar/03/2021</td>
                  <td>
                    <a href="#">Profile</a>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Waqas</td>
                  <td>Ali</td>
                  <td>Umar malam</td>
                  <td>Abc</td>
                  <td>Umina malam</td>
                  <td>Mar/03/2021</td>
                  <td>
                    <a href="#">Profile</a>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td>Waqas</td>
                  <td>Ali</td>
                  <td>Umar malam</td>
                  <td>Abc</td>
                  <td>Umina malam</td>
                  <td>Mar/03/2021</td>
                  <td>
                    <a href="#">Profile</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default DefualterListTable;
