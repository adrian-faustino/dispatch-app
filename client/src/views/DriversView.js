import React from "react";
/** Redux **/
import { useSelector } from "react-redux";
/** Subcomponents **/
import { DriversList } from "../components";

const DriversView = () => {
  /** Redux **/
  const store = useSelector((state) => state);
  const navToggledStyle = store.slideInToggled && "nav-toggled";

  return (
    <div className={`view-offset ${navToggledStyle}`}>
      <DriversList />
    </div>
  );
};

export default DriversView;
