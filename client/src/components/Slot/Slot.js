import React, { useEffect, useState } from "react";
/** Subcomponents **/
import SlotControllers from "./SlotControllers/SlotControllers";
import EntryForm from "../EntryForm/EntryForm";
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
  const [bookedData, setBookedData] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

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
    handlers.handleStyling((bookedData) => setBookedData(bookedData));

    return () => {
      // when week changes, close all forms
      setFormOpen(false);
    };
  }, [week]);

  // Set styling
  const slotStyles = classNames({
    booked: bookedData,
  });

  const handleEntrySuccess = (newEntry) => {
    // trigger view change
    setBookedData(newEntry);

    // close form
    setFormOpen(false);
  };

  const handleEditMode = () => {};

  return (
    <div
      onClick={handlers.handleSlotDate}
      className={`Slot__container ${_day} ${slotStyles}`}
    >
      <div>{`${_day} ${hour} h`}</div>

      {bookedData && (
        <div>
          <div>Driver: {bookedData.driver}</div>
          <div>Description: {bookedData.description}</div>
        </div>
      )}

      <SlotControllers
        setFormOpen={setFormOpen}
        formOpen={formOpen}
        bookedData={bookedData}
        handleEntrySuccess={handleEditMode}
      />

      {formOpen && (
        <EntryForm
          bookedData={bookedData}
          handleEntrySuccess={handleEntrySuccess}
        />
      )}
    </div>
  );
};

export default Slot;
