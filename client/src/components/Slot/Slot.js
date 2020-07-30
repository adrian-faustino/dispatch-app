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
/** Constants **/
import { DRIVERS } from "../../util/constants";

const Slot = ({ day, hour, bookableDay }) => {
  /** State **/
  const [bookedData, setBookedData] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { showBookableSlots, showOutsideAvailability } = store.viewFilters;

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

  // Set styling based on view filters
  const slotStyles = classNames({
    booked: bookedData,
    bookableDay: showBookableSlots && bookableDay,
    outsideAvailability: showOutsideAvailability && bookedData && !bookableDay,
  });

  const handleEntrySuccess = (success, err) => {
    // handle error
    if (err) return handleEntryErr(err);
    console.log(success.msg);
    // trigger view change
    setBookedData(success.data);
    // close form
    setFormOpen(false);
    // switch current driver to created driver, unless in "All" view
    if (store.driver === DRIVERS[0]) return;
    else dispatch(setDriver(success.data.driver));
  };

  const handleEntryErr = (errObj) => {
    // update redux error obj
    dispatch(setError(errObj));
  };

  return (
    <div
      onClick={handlers.handleSlotClick}
      className={`Slot__container wkDay${day} ${slotStyles}`}
    >
      {!formOpen && <SlotView dateObj={dateObj} bookedData={bookedData} />}

      {!formOpen && (
        <SlotControllers
          setFormOpen={setFormOpen}
          formOpen={formOpen}
          bookedData={bookedData}
          setBookedData={setBookedData}
        />
      )}

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
