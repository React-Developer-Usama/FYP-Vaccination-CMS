import React from "react";
import Heading from "../Heading/Heading";
import { BiSearchAlt2 } from "react-icons/bi";
import "./dailyreporttabel.css";
const DailyReportTabel = () => {
  return (
    <div className="body_section">
      <div className="daily_report_tabel_section">
        <div className="daily_report_head">
          <div className="daily_report_heading">
            <Heading name="Daily Report" />
          </div>
          <div className="daily_report_search">
            <input type="text" placeholder="Search Date" />
            <i>
              <BiSearchAlt2 />
            </i>
          </div>
        </div>
        <div className="daily_report_tabel">
          <Heading name="Daily Report" />
          <table>
            <thead>
              <tr>
                <td>No of Children</td>
                <td>No of Vaccines Used</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>29</td>
                <td>29</td>
                <td>Mar/02/2021</td>
              </tr>
              <tr>
                <td>29</td>
                <td>29</td>
                <td>Mar/02/2021</td>
              </tr>
              <tr>
                <td>29</td>
                <td>29</td>
                <td>Mar/02/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyReportTabel;
