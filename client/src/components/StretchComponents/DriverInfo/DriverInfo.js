import React, { useEffect } from "react";
/** Helpers **/
import { getDriverData } from "../../../util/driverDbHelpers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";

const DriverInfo = ({ driver }) => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // get user availabilty?
  useEffect(() => {
    getDriverData(store.driver, (data) => {
      console.log("Driver data", data);
    });
  }, []);

  // allow availabilty info

  return (
    <div>
      driver info~
      <span>{store.driver}</span>
    </div>
  );
};

export default DriverInfo;
