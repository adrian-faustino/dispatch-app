import React from "react";
/** Styles **/
import "./Slot.css";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
/** Redux **/
import { useSelector } from "react-redux";
/** DB **/
import { entries } from "../../db/entries";

const Slot = ({ day, hour }) => {
  /** Redux **/
  const date = useSelector((state) => state.date);

  const _day = dayToWords(day);

  console.log("Entries:", entries);

  const createEntry = () => {
    console.log("clicked!");
    const time = `${date.week}-${day}-${hour}`;
    const description = "Pick up";

    entries[time] = { time, description };
  };

  return (
    <div onClick={createEntry} className={`Slot__container ${_day}`}>
      <div>{`${_day} ${hour} h`}</div>
    </div>
  );
};

export default Slot;
