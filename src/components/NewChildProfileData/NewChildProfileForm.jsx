import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { FaPlus, FaSearch } from "react-icons/fa";
import "./newchildprofileform.css";

const NewChildProfileForm = () => {
  return (
    <div className="body_section">
      <div className="new_child_topbar">
        <div className="add_child_popup">
          <p>
            <span>
              <FaPlus />
            </span>{" "}
            New Child
          </p>
        </div>
        <div className="child_profile_head">
          <Heading name="Chlid Profile" />
        </div>
        <div className="search_child">
          <input type="text" placeholder="Search" />
          <i>
            <FaSearch />{" "}
          </i>
        </div>
      </div>
      <div className="child_profile_form">
        <form>
          <div>
            <label>House No</label>
            <input type="text" />
          </div>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Father Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Phone No</label>
            <input type="number" />
          </div>
          <div>
            <label>DOB</label>
            <input type="text" />
          </div>
          <div>
            <label>Province</label>
            <input type="text" />
          </div>
          <div>
            <label>District</label>
            <input type="text" />
          </div>
          <div>
            <label>Tehsil</label>
            <input type="text" />
          </div>
          <div>
            <label>UC</label>
            <input type="text" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" />
          </div>
          <div>
            <label>Area Incharge</label>
            <input type="text" />
          </div>
          <div>
            <label>Team Member</label>
            <input type="text" />
          </div>
          <div>
            <label>Team No</label>
            <input type="text" />
          </div>
          <div>
            <label>Age</label>
            <input type="text" />
          </div>
          <div className="child_profile_from_btn">
            <Button name="Submit" />
          </div>
        </form>
      </div>
      <div className="chlid_profile_table">
        <table>
          <thead>
            <tr>
              <td>Name Vaccine</td>
              <td>Date</td>
              <td>Coverd</td>
              <td>Reason if not cover</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hp Vaccine</td>
              <td>Mar/03/2021</td>
              <td>
                <a href="#">Coverd</a> <a href="#">Non Coverd</a>
              </td>
              <td>Statment</td>
            </tr>
            <tr>
              <td>Hp Vaccine</td>
              <td>Mar/03/2021</td>
              <td>
                <a href="#">Coverd</a> <a href="#">Non Coverd</a>
              </td>
              <td>Statment</td>
            </tr>
            <tr>
              <td>Hp Vaccine</td>
              <td>Mar/03/2021</td>
              <td>
                <a href="#">Coverd</a> <a href="#">Non Coverd</a>
              </td>
              <td>Statment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewChildProfileForm;
