import React, { useState } from "react";
/** Subcomponents **/
import { Slot } from "../../components";
import ColumnRow from "../../components/Slot/SlotView/ColumnRow";
/** Constants **/
import { DAYS, HOURS } from "../../util/constants";
/** Helpers **/
import { getDriverData } from "../../util/driverDbHelpers";

const TimetableHandlers = (store) => {
  /** State **/
  const [driverAvailability, setDriverAvailability] = useState([]);

  // get availability for current driver
  const handleGetDriverAvailability = () => {
    getDriverData(store.driver, (data) => {
      if (!data) return;
      console.log("Driver availability", data.availability);
      setDriverAvailability(data.availability);
    });
  };

  // return list of JSX Slot components
  const renderSlots = () => {
    console.log("Generating slots...");
    const slots = [];
    for (let day = -1; day < DAYS; day++) {
      for (let hour = -1; hour < HOURS; hour++) {
        if (day === -1 || hour === -1)
          slots.push(
            <ColumnRow key={`${day}-${hour}-slots`} day={day} hour={hour} />
          );
        else
          slots.push(
            <Slot key={`${day}-${hour}-slots`} day={day} hour={hour} />
          );
      }
    }
    return slots;
  };

  return {
    renderSlots,
    handleGetDriverAvailability,
  };
};

export default TimetableHandlers;
