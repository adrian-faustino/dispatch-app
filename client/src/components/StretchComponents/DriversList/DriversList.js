import React from "react";
/** Handlers **/
import DriversListHandlers from "./DriversListHandlers";
/** Redux **/
import { useDispatch, useSelector } from "react-redux";

const DriversList = () => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = DriversListHandlers(dispatch, store);

  return (
    <div>
      <div>{handlers.renderDriversList()}</div>
    </div>
  );
};

export default DriversList;
