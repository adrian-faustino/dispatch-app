import React from "react";
/** Styles **/
import "../Slot.css";

const ColumnRow = ({ day, hour }) => {
  if (day === -1 && hour === -1) {
    console.log("same bro");
    return <div>lol!</div>;
  }

  return <div className={`Slot__container wkDay${day}`}>column row!!!</div>;
};

export default ColumnRow;
