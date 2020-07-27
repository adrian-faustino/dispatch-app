import React from "react";
/** Reactstrap **/
import { Table } from "reactstrap";
/** Handlers **/
import AvailabilityTableHandlers from "./AvailabilityTableHandlers";

const AvailabilityTable = ({ parentHandlers }) => {
  /** Handlers **/
  const handlers = AvailabilityTableHandlers(parentHandlers);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Day</th>
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
