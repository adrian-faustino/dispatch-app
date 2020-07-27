import React from "react";
/** Handlers **/
import DriversListHandlers from "./DriversListHandlers";
/** Subcomponents **/
import DriverInfo from "../DriverInfo/DriverInfo";

const DriversList = () => {
  /** Handlers **/
  const handlers = DriversListHandlers();

  return (
    <div>
      <div>{handlers.renderDriversList()}</div>

      {handlers.state.selectedDriverInfo && (
        <DriverInfo driver={handlers.state.selectedDriverInfo} />
      )}
    </div>
  );
};

export default DriversList;
