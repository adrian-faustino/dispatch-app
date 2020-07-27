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
  const [driverAvailability, setDriverAvailability] = useState(null);

  // get availability for current driver
  const handleGetDriverAvailability = () => {
    getDriverData(store.driver, (data) => {
      if (!data) return;
      console.log("Driver availability", data.availability);
      setDriverAvailability(data.availability);
    });
  };

  const isWithinAvailability = (day, hour) => {
    if (!driverAvailability) return false;

    // if this day is a day within availability and this day accomodates that hour...
    if (driverAvailability[day] && driverAvailability[day].includes(hour))
      return true;
    else return false;
  };

  // return list of JSX Slot components
  const renderSlots = () => {
    console.log("Generating slots...");
    const slots = [];
    for (let day = -1; day < DAYS; day++) {
      for (let hour = -1; hour < HOURS; hour++) {
        // pass bool if slot is within current driver availability
        const bookableDay = isWithinAvailability(day, hour);

        if (day === -1 || hour === -1)
          slots.push(
            <ColumnRow key={`${day}-${hour}-slots`} day={day} hour={hour} />
          );
        else
          slots.push(
            <Slot
              bookableDay={bookableDay}
              key={`${day}-${hour}-slots`}
              day={day}
              hour={hour}
            />
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
