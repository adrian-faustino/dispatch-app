import React from "react";
/** Styles **/
import "../Slot.css";
/** Helpers **/
import { dayToWords, hourTo12hFormat } from "../../../util/formatHelpers";

const ColumnRow = ({ day, hour }) => {
  // if day -1, render hours
  const hours = day === -1 && <div>{hour + "h"}</div>;

  // if hours -1, render days
  const days = hour === -1 && <div>{dayToWords(day)}</div>;

  return (
    <div className={`Slot__container wkDay${day}`}>
      {hours && hourTo12hFormat(hour)}
      {days && days}
    </div>
  );
};

export default ColumnRow;
