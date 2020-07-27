import React from "react";
/** Handlers **/
import DriversListHandlers from "./DriversListHandlers";
/** Redux **/
import { useDispatch } from "react-redux";

const DriversList = () => {
  /** Redux **/
  const dispatch = useDispatch();

  /** Handlers **/
  const handlers = DriversListHandlers(dispatch);

  return (
    <div>
      <div>{handlers.renderDriversList()}</div>
    </div>
  );
};

export default DriversList;
