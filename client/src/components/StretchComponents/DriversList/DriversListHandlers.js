import React, { useState } from "react";
/** Constants **/
import { DRIVERS } from "../../../util/constants";

const DriversListHandlers = () => {
  /** State **/
  const [state, setState] = useState({
    selectedDriverInfo: "",
  });

  const handleExpandInfo = (e) => {
    e.persist();
    setState((state) => ({ ...state, selectedDriverInfo: e.target.innerHTML }));
  };

  const renderDriversList = () => {
    const drivers_li = DRIVERS.map((driver, i) => {
      if (i === 0) return <div key={`driverList-${driver}`}>Drivers</div>;
      else
        return (
          <li key={`driverList-${driver}`} onClick={handleExpandInfo}>
            {driver}
          </li>
        );
    });

    return <ul>{drivers_li}</ul>;
  };

  return {
    state,
    handleExpandInfo,
    renderDriversList,
  };
};

export default DriversListHandlers;
