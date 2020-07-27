import React from "react";
/** Constants **/
import { DAY_WORDS } from "../../../../util/constants";

const AvailabilityTableHandlers = (parentHandlers) => {
  const { driverData } = parentHandlers;

  const renderRows = () => {
    const { day_availability, hour_availability } = driverData.availability;
    console.log("table", driverData);
    return DAY_WORDS.map((day, i) => {
      return (
        <tr>
          <th score="row">{day}</th>
        </tr>
      );
    });
  };

  return {
    renderRows,
  };
};

export default AvailabilityTableHandlers;
