import React from "react";
import Heading from "../Heading/Heading";
import Inputs from "../Inputs/Inputs";
import Button from "../Button/Button";
import "./dataenteryform.css";
const DataEnteryForm = () => {
  return (
    <>
      <div className="body_section">
        <div className="data_entery_form_section">
          <div className="data_entery_form_heading">
            <Heading name="Data Entery" />
          </div>
          <div className="data_entery_form">
            <Heading name="Inventory Data Entery" />
            <form>
              <div className="batchNo_feild">
                <label>Batch No</label>
                <Inputs type="text" />
              </div>
              <div className="name_feild">
                <label>Name</label>
                <Inputs type="text" />
              </div>
              <div className="surename_feild">
                <label>Sure Name</label>
                <Inputs type="text" />
              </div>
              <div className="manufacture_feild">
                <label>Manufacture</label>
                <Inputs type="text" />
              </div>
              <div className="manufactureDate_feild">
                <label>Manufacture Date</label>
                <Inputs type="date" />
              </div>
              <div className="expiryDate_feild">
                <label>Expiry Date</label>
                <Inputs type="date" />
              </div>
              <div className="quantiy_felid">
                <label>Quantiy</label>
                <Inputs type="text" />
              </div>
              <div className="data_entry_btn">
                <Button name="Submite" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataEnteryForm;
