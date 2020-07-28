import React from "react";
/** Styles **/
import "./EditAvailability.css";
/** Constants **/
import { DAY_WORDS, HOURS } from "../../../../util/constants";
/** Reactstrap */
import { Label, Form, FormGroup, Input } from "reactstrap";
/** Helpers **/
import { hourAMorPM } from "../../../../util/formatHelpers";

// handlers passed down from DriverHandlers.js
const EditAvailability = ({ handlers }) => {
  const renderHoursJSX = () => {
    const resultJSX = [];
    for (let hour = 0; hour < HOURS; hour++) {
      resultJSX.push(
        <FormGroup className="EditAvailability__form-group">
          <Input type="checkbox" />
          <Label>{`${hour}${hourAMorPM(hour)}`}</Label>
        </FormGroup>
      );
    }
    return resultJSX;
  };

  // spread for rendering
  const formJSX = DAY_WORDS.map((day, i) => {
    return (
      <>
        <h3>{day}</h3>
        <div className="EditAvailability__select-grid-container">
          {renderHoursJSX()}
        </div>
      </>
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
