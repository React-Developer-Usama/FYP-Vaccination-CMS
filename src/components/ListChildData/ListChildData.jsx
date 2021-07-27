import React from "react";
import Heading from "../Heading/Heading";
import { AiOutlineSearch } from "react-icons/ai";
import "./listchild.css";
const ListChildData = () => {
  return (
    <div className="body_section">
      <div className="new_child_topbar list_child_header">
        <div className="child_profile_head">
          <Heading name="List of Children" />
        </div>
        <div className="search_child">
          <input type="text" placeholder="Search" />
          <i>
            <AiOutlineSearch />{" "}
          </i>
        </div>
      </div>
      <div className="list_child_tabel">
        <table>
          <thead>
            <tr>
              <td>House No</td>
              <td>Name</td>
              <td>Father Name</td>
              <td>Phone</td>
              <td>UC</td>
              <td>Address</td>
              <td>DOB</td>
              <td>Profile</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>02</td>
              <td>Ali</td>
              <td>Khan</td>
              <td>0340221343</td>
              <td>Peshawar</td>
              <td>Peshawar</td>
              <td>Mar/02/2019</td>
              <td>
                <a href="https://www.google.com/" target="_blank">
                  Profile
                </a>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Ali</td>
              <td>Khan</td>
              <td>0340221343</td>
              <td>Peshawar</td>
              <td>Peshawar</td>
              <td>Mar/02/2019</td>
              <td>
                <a href="https://www.google.com/" target="_blank">
                  Profile
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListChildData;
