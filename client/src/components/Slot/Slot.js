import React from "react";
/** Styles **/
import "./Slot.css";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";

const Slot = ({ day, hour }) => {
  const _day = dayToWords(day);

  return (
    <div
      onClick={() => {
        console.log("You clicked", _day, hour);
      }}
      className={`Slot__container ${_day}`}
    >
      <div>{`${_day} ${hour} h`}</div>
    </div>
  );
};

export default Slot;
