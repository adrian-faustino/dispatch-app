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
    for (let i = 0; i < DAYS; i++) {
      for (let j = 0; j < HOURS; j++) {
        slots.push(<Slot key={`${i}-${j}`} day={i} hour={j} />);
      }
    }
    return slots;
  };

  return {
    renderSlots,
  };
};

export default TimetableHandlers;
