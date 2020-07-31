import React from "react";
/** Redux **/
import { useSelector } from "react-redux";
/** Subcomponents **/
import { DriversList, DriverInfo } from "../components";
/** Constants **/
import { DRIVERS } from "../util/constants";

const DriversView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return (
    <div className={`view-offset ${navToggledStyle}`}>
      <DriversList />
      {store.driver !== DRIVERS[0] ? (
        <DriverInfo />
      ) : (
        <span className="DriversList__empty-span medium-text">
          Make a selection to view driver info.
        </span>
      )}
    </div>
  );
};

export default DriversView;
