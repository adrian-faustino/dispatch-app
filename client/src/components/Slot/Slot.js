import React, { useEffect, useState } from "react";
/** Styles **/
import "./Slot.css";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
import { isBooked } from "../../util/entryValidationHelpers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
/** Handlers */
import SlotHandlers from "./SlotHandlers";
/** npm **/
import classNames from "classnames";
/** DB **/
import { entries } from "../../db/entries";

const Slot = ({ day, hour }) => {
  const [booked, setBooked] = useState(false);
  const [tempBooked, setTempBooked] = useState(false);

  /** Redux **/
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);
  const dateObj = {
    week: date.week,
    day,
    hour,
  };

  /** Hanlders **/
  const handlers = SlotHandlers(dispatch);

  const _day = dayToWords(day);

  // determine if this slot is taken
  useEffect(() => {
    if (isBooked(dateObj)) {
      setBooked(true);
    } else {
      setBooked(false);
    }

    return () => {
      // undo any temp views updates once user changes week
      setTempBooked(false);
    };
  }, [date.week, entries]);

  const slotStyles = classNames({
    booked: booked || tempBooked,
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
