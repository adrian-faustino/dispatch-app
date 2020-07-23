import React, { useEffect, useState } from "react";
/** Styles **/
import "./Slot.css";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
import { updateDate } from "../../actions/timetableNavigation";
/** Handlers */
import SlotHandlers from "./SlotHandlers";
/** npm **/
import classNames from "classnames";
/** DB **/
import { entries } from "../../db/entries";

const Slot = ({ day, hour }) => {
  const [isBooked, setIsBooked] = useState(false);
  const [tempIsBooked, setTempIsBooked] = useState(false);

  /** Redux **/
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);

  /** Hanlders **/
  const handlers = SlotHandlers(dispatch);

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

  return (
    <div
      onClick={() => handlers.handleClick({ day, hour })}
      className={`Slot__container ${_day} ${slotStyles}`}
    >
      <div>{`${_day} ${hour} h`}</div>
    </div>
  );
};

export default Slot;
