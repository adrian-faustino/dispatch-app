import React, { useEffect, useState } from "react";
/** Styles **/
import "./Slot.css";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
/** Redux **/
import { useSelector } from "react-redux";
/** npm **/
import classNames from "classnames";
/** DB **/
import { entries } from "../../db/entries";

const Slot = ({ day, hour }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [tempIsBooked, setTempIsBooked] = useState(false);

  /** Redux **/
  const date = useSelector((state) => state.date);

  const _day = dayToWords(day);

  // determine if this slot is taken
  useEffect(() => {
    // refactor #3
    const entryID = `${date.week}-${day}-${hour}`;
    if (entries.hasOwnProperty(entryID)) {
      console.log("IS AN ENTRY", entryID);
      setIsBooked(true);
    } else {
      setIsBooked(false);
    }

    return () => {
      // undo any temp views updates once user changes week
      setTempIsBooked(false);
    };
  }, [date.week, entries]);

  const slotStyles = classNames({
    booked: isBooked || tempIsBooked,
  });

  // temporary - delete later
  const createEntry = () => {
    console.log("clicked!");
    const time = `${date.week}-${day}-${hour}`;
    const description = "Pick up";

    // update db
    entries[time] = { time, description };

    // set temp view change
    setTempIsBooked(true);
  };

  return (
    <div
      onClick={createEntry}
      className={`Slot__container ${_day} ${slotStyles}`}
    >
      <div>{`${_day} ${hour} h`}</div>
    </div>
  );
};

export default Slot;
