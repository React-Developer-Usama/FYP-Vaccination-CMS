import React from "react";
import Heading from "../Heading/Heading";
import "./vaccinationcards.css";

const VaccinationCardData = [
  { id: 1, name: "Child Profile", avrage: 44 },
  { id: 2, name: "Child Profile", avrage: 33 },
  { id: 3, name: "Child Profile", avrage: 67 },
  { id: 4, name: "Child Profile", avrage: 94 },
];
const VaccinationCards = () => {
  return (
    <>
      <div className="body_section">
        <div className="dashboard_heading">
          <Heading name="Vaccination" />
        </div>
        <div className="vaccination_card_section">
          {VaccinationCardData.map((values) => {
            return (
              <>
                <div className="vaccination_card" key={values.id}>
                  <div className="cards">
                    <div className="card_avrage">
                      <h3>{values.avrage}</h3>
                    </div>
                    <div className="card_text">
                      <h3>{values.name}</h3>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default VaccinationCards;
