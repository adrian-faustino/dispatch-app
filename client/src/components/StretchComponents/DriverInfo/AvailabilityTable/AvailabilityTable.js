import React from "react";
/** Handlers **/
import AvailabilityTableHandlers from "./AvailabilityTableHandlers";
/** Styles **/
import "./AvailabilityTable.css";
/** Subcomponents **/
import EditAvailability from "./EditAvailability";
/** Redux **/
import { useSelector } from "react-redux";

// These props are passed down from DriverInfo.js
const AvailabilityTable = ({ parentHandlers }) => {
  /** Redux **/
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = AvailabilityTableHandlers(parentHandlers);

  return (
    <div className="AvailabilityTable__container">
      {store.editMode && <EditAvailability handlers={parentHandlers} />}

      {!store.editMode && (
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
      )}
    </div>
  );
};

export default AvailabilityTable;
