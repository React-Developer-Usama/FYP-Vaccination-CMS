import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  HiOutlineDesktopComputer,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { GiLoveInjection } from "react-icons/gi";
import { FaEyeDropper } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_section">
        <ul>
          <li>
            <a href="#">
              <span>
                <AiOutlineDashboard />
              </span>{" "}
              Dashboard{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <HiOutlineDesktopComputer />{" "}
              </span>{" "}
              Inventory
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <GiLoveInjection />
              </span>{" "}
              Immunization
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <FiUserPlus />{" "}
              </span>{" "}
              Profile create
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <HiOutlineDocumentReport />
              </span>{" "}
              Reports
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <FaEyeDropper />
              </span>{" "}
              Poilio
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
