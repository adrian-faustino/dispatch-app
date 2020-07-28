import React from "react";
/** Handlers **/
import AvailabilityTableHandlers from "./AvailabilityTableHandlers";
/** Styles **/
import "./AvailabilityTable.css";

const AvailabilityTable = ({ parentHandlers }) => {
  /** Handlers **/
  const handlers = AvailabilityTableHandlers(parentHandlers);

  return (
    <div className="AvailabilityTable__container">
      <table className="AvailabilityTable__table">
        <thead>
          <tr className="AvailabilityTable__column-headers">
            <th></th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>{handlers.renderRows()}</tbody>
      </table>
    </div>
  );
};

export default AvailabilityTable;
