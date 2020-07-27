import React from "react";
/** Handlers **/
import DriversListHandlers from "./DriversListHandlers";

const DriversList = () => {
  /** Handlers **/
  const handlers = DriversListHandlers();

  return (
    <div>
      <div>{handlers.renderDriversList()}</div>
    </div>
  );
};

export default DriversList;
