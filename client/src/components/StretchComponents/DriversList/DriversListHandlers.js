import React from "react";
/** Constants **/
import { DRIVERS } from "../../../util/constants";
/** Subcomponents **/
import { DriverInfo } from "../../";

const DriversListHandlers = () => {
  const renderDriversList = () => {
    const drivers_li = DRIVERS.map((driver) => <DriverInfo driver={driver} />);

    return <ul>{drivers_li}</ul>;
  };

  return {
    renderDriversList,
  };
};

export default DriversListHandlers;
