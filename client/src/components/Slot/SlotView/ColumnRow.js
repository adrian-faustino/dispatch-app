import React from "react";
/** Styles **/
import "../Slot.css";
/** Helpers **/
import { dayToWords, hourTo12hFormat } from "../../../util/formatHelpers";

const ColumnRow = ({ day, hour }) => {
  // if day -1, render hours
  const hours = day === -1 && (
    <div className={`Slot__row-header corner${day}${hour}`}>
      {hourTo12hFormat(hour)}
    </div>
  );

  // if hours -1, render days
  const days = hour === -1 && (
    <div className={`Slot__column-header corner${day}${hour}`}>
      {dayToWords(day)}
    </div>
  );

  return (
    <div className={`Slot__container wkDay${day} corner${day}${hour}`}>
      {hours && hours}
      {days && days}
    </div>
  );
};

export default ColumnRow;
