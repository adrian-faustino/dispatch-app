import React from "react";
/** Subcomponents **/
import { Slot } from "../../components";
/** Constants **/
import { DAYS, HOURS } from "../../util/constants";

const TimetableHandlers = (dispatch) => {
  // return list of JSX Slot components
  const renderSlots = () => {
    console.log("Generating slots...");
    const slots = [];
    for (let day = 0; day < DAYS; day++) {
      for (let hour = 0; hour < HOURS; hour++) {
        slots.push(<Slot key={`${day}-${hour}`} day={day} hour={hour} />);
      }
    }
    return slots;
  };

  return {
    renderSlots,
  };
};

export default TimetableHandlers;
