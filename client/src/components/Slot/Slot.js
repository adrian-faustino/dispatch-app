import React, { useEffect, useState } from "react";
/** Subcomponents **/
import SlotControllers from "./SlotControllers/SlotControllers";
/** Styles **/
import "./Slot.css";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
/** Handlers */
import SlotHandlers from "./SlotHandlers";
/** npm **/
import classNames from "classnames";

const Slot = ({ day, hour }) => {
  /** State **/
  const [booked, setBooked] = useState(false);
  const [tempBooked, setTempBooked] = useState(false);

  /** Redux **/
  const dispatch = useDispatch();
  const week = useSelector((state) => state.date.week);

  /** Variables **/
  const _day = dayToWords(day);
  const dateObj = { week, day, hour };

  /** Hanlders **/
  const handlers = SlotHandlers(dispatch, dateObj);

  useEffect(() => {
    // highlight if slot is booked
    handlers.handleStyling((bool) => setBooked(bool));

    return () => {
      // undo any temp views updates once user changes week
      setTempBooked(false);
    };
  }, [week]);

  // Set styling
  const slotStyles = classNames({
    booked: booked || tempBooked,
  });

  return (
    <div className={`Slot__container ${_day} ${slotStyles}`}>
      <div>{`${_day} ${hour} h`}</div>

      <SlotControllers handlers={handlers} />
    </div>
  );
};

export default Slot;
