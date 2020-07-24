import React, { useEffect, useState } from "react";
/** Subcomponents **/
import SlotControllers from "./SlotControllers/SlotControllers";
import SlotView from "./SlotView/SlotView";
import EntryForm from "../EntryForm/EntryForm";
/** Styles **/
import "./Slot.css";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../../actions/errorActions";
import { setDriver } from "../../actions/driverActions";
/** Handlers */
import SlotHandlers from "./SlotHandlers";
/** npm **/
import classNames from "classnames";

const Slot = ({ day, hour }) => {
  /** State **/
  const [bookedData, setBookedData] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Variables **/
  const dateObj = { week: store.date.week, day, hour };

  /** Hanlders **/
  const handlers = SlotHandlers(dispatch, dateObj, store);

  useEffect(() => {
    // highlight if slot is booked
    handlers.handleStyling((bookedData) => setBookedData(bookedData));

    return () => {
      // when week changes, close all forms
      setFormOpen(false);
    };
  }, [store.date.week, store.driver]);

  // Set styling
  const slotStyles = classNames({
    booked: bookedData,
  });

  const handleEntrySuccess = (newEntry, err) => {
    // handle error
    if (err) return handleEntryErr(err);

    console.log("Successfully updated db:", newEntry);
    // trigger view change
    setBookedData(newEntry);

    // close form
    setFormOpen(false);

    // switch current driver to created driver
    dispatch(setDriver(newEntry.driver));
  };

  const handleEntryErr = (errObj) => {
    console.log(errObj.errMsg);
    // update redux error obj
    dispatch(setError(errObj));
  };

  return (
    <div className={`Slot__container wkDay${day} ${slotStyles}`}>
      <SlotView dateObj={dateObj} bookedData={bookedData} />

      <SlotControllers
        setFormOpen={setFormOpen}
        formOpen={formOpen}
        bookedData={bookedData}
        setBookedData={setBookedData}
      />

      {formOpen && (
        <EntryForm
          dateObj={dateObj}
          setFormOpen={setFormOpen}
          bookedData={bookedData}
          handleEntrySuccess={handleEntrySuccess}
        />
      )}
    </div>
  );
};

export default Slot;
