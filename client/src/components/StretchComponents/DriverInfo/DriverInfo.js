import React, { useEffect, useState } from "react";
/** Helpers **/
import { getDriverData } from "../../../util/driverDbHelpers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";

const DriverInfo = ({ driver }) => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** State **/
  const [driverData, setDriverData] = useState({
    name: "lol",
    color: "",
    availability: {
      hour_availability: [],
      day_availability: [],
    },
  });

  // get user availabilty?
  useEffect(() => {
    getDriverData(store.driver, (data) => {
      console.log("Driver data", data);
      setDriverData(data);
    });
  }, [store.driver]);

  // allow availabilty info

  return (
    <div>
      <span>{store.driver}</span>

      {driverData && (
        <>
          {" "}
          <span>{driverData.name}</span>
          <span>{driverData.color}</span>
        </>
      )}
    </div>
  );
};

export default DriverInfo;
