import React from "react";
/** Reactstrap **/
import { Table } from "reactstrap";
/** Handlers **/
import AvailabilityTableHandlers from "./AvailabilityTableHandlers";
/** Styles **/
import "./AvailabilityTable.css";

const AvailabilityTable = ({ parentHandlers }) => {
  /** Handlers **/
  const handlers = AvailabilityTableHandlers(parentHandlers);

  return (
    <div className="AvailabilityTable__container">
      <Table>
        <thead>
          <tr className="AvailabilityTable__column-headers">
            <th></th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>{handlers.renderRows()}</tbody>
      </Table>
    </div>
  );
};

export default AvailabilityTable;
