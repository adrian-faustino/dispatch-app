import React from "react";
/** Styles **/
import "./EditAvailability.css";
/** Constants **/
import { DAY_WORDS, HOURS } from "../../../../util/constants";
/** Reactstrap */
import { Label, Form, FormGroup, Input } from "reactstrap";

/** Subcomponents **/
import Checkbox from "./Checkbox";

// handlers passed down from DriverHandlers.js
const EditAvailability = ({ handlers }) => {
  const renderHoursJSX = (dayIndex) => {
    const resultJSX = [];
    for (let hour = 0; hour < HOURS; hour++) {
      resultJSX.push(
        <Checkbox
          key={`${dayIndex}-${hour}-checkbox`}
          hour={hour}
          handlers={handlers}
          dayIndex={dayIndex}
        />
      );
    }
    return resultJSX;
  };

  // spread for rendering
  const formJSX = DAY_WORDS.map((day, i) => {
    return (
      <div key={`${day}-options-container`}>
        <h3>{day}</h3>
        <div className="EditAvailability__select-grid-container">
          {renderHoursJSX(i)}
        </div>
      </div>
    );
  });

  return (
    <div className="EditAvailability__container">
      <h1>editing availability</h1>
      <Form>{formJSX}</Form>
    </div>
  );
};

export default EditAvailability;
