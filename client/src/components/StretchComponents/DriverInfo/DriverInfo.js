import React, { useEffect } from "react";
/** Helpers **/
import { getDriverData } from "../../../util/driverDbHelpers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
/** Subcomponents **/
import DriverInfoControllers from "./DriverInfoControllers";
import AvailabilityTable from "./AvailabilityTable/AvailabilityTable";
/** Styles **/
import "./DriverInfo.css";
/** Handlers **/
import DriverHandlers from "./DriverHandlers";

const DriverInfo = () => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = DriverHandlers(dispatch, store);

  // get user availabilty
  useEffect(() => {
    getDriverData(store.driver, (data) => {
      console.log("Driver data", data);
      handlers.setDriverData(data);
    });
  }, [store.driver]);

  return (
    <div>
      {handlers.driverData && (
        <div className="DriverInfo__container">
          {/* TODO: change these spans to label */}
          <span className="DriverInfo__label small-text">Name</span>
          <span>{handlers.driverData.name}</span>
          <span className="DriverInfo__label small-text">Color</span>

          {/* Color block editor */}
          {handlers.editMode ? (
            <input
              disabled={!handlers.editMode}
              value={handlers.driverData.color}
              type="color"
              onChange={handlers.handleColorChange}
              className="DriverInfo__color-block"
            />
          ) : (
            <div
              style={{ background: handlers.driverData.color }}
              className="DriverInfo__color-block"
            ></div>
          )}

          {/* Availability table */}
          <span className="DriverInfo__label small-text">Availability</span>
          <span>
            <AvailabilityTable parentHandlers={handlers} />
          </span>

          {/* Driver card buttons */}
          <DriverInfoControllers handlers={handlers} />
        </div>
      )}
    </div>
  );
};

export default DriverInfo;
