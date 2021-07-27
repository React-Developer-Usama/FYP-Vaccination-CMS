import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import "./newchildprofileform.css";
const NewChildProfileForm = () => {
  const [show, setshow] = useState(false);
  const showDiv = () => {
    setshow(true);
  };
  const hideDiv = () => {
    setshow(false);
  };
  return (
    <>
      <div className="body_section">
        <div className="new_child_topbar">
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
          </form>
        </div>
        <div className="child_vaccination_form">
          <form>
            <div>
              <label>Vaccination Name</label>
              <select>
                <option>Vaccination Name</option>
                <option>Vaccination Name</option>
                <option>Vaccination Name</option>
                <option>Vaccination Name</option>
              </select>
            </div>
            <div>
              <label>Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Status</label>
              <select>
                <option></option>
                <option>Cover</option>
                <option>Not Cover</option>
              </select>
            </div>
            <div>
              <label>Comment</label>
              <input type="text" />
            </div>
            <div className="child_vaccination_form_btn">
              <Button name="Add" />
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
                <td>Edit</td>
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
                <td>
                  <i onClick={showDiv}>
                    <AiFillEdit />
                  </i>
                </td>
              </tr>
              <tr>
                <td>Hp Vaccine</td>
                <td>Mar/03/2021</td>
                <td>
                  <a href="#">Coverd</a> <a href="#">Non Coverd</a>
                </td>
                <td>Statment</td>
                <td>
                  <i onClick={showDiv}>
                    <AiFillEdit />
                  </i>
                </td>
              </tr>
              <tr>
                <td>Hp Vaccine</td>
                <td>Mar/03/2021</td>
                <td>
                  <a href="#">Coverd</a> <a href="#">Non Coverd</a>
                </td>
                <td>Statment</td>
                <td>
                  <i onClick={showDiv}>
                    <AiFillEdit />
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {show ? (
        <div className="vaccination_update_modal">
          <div className="vaccination_update_form_section">
            <div className="vaccination_modal_header">
              <div className="vaccination_modal_heading">
                <h3>Vaccination Update</h3>
              </div>
              <div className="vaccination_modal_close">
                <i onClick={hideDiv}>
                  <GrFormClose />
                </i>
              </div>
            </div>
            <form className="vaccination_update_form">
              <div>
                <label>Vaccination Name</label>
                <select>
                  <option>Vaccination Name</option>
                  <option>Vaccination Name</option>
                  <option>Vaccination Name</option>
                  <option>Vaccination Name</option>
                </select>
              </div>
              <div>
                <label>Date</label>
                <input type="date" />
              </div>
              <div>
                <label>Status</label>
                <select>
                  <option></option>
                  <option>Cover</option>
                  <option>Not Cover</option>
                </select>
              </div>
              <div>
                <label>Comment</label>
                <input type="text" />
              </div>
              <div className="child_vaccination_form_btn">
                <Button name="Update" />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewChildProfileForm;
