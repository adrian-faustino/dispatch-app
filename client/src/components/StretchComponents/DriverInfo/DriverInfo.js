import React, { useEffect, useState } from "react";
/** Helpers **/
import { getDriverData } from "../../../util/driverDbHelpers";
import { availabilityToWords } from "../../../util/formatHelpers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
/** Styles **/
import "./DriverInfo.css";

const DriverInfo = () => {
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
      {driverData && (
        <div className="DriverInfo__container">
          <span className="DriverInfo__label small-text">Name</span>
          <span>{driverData.name}</span>
          <span className="DriverInfo__label small-text">Color</span>
          <div
            className="DriverInfo__color-block"
            style={{ background: driverData.color }}
          ></div>
          <span className="DriverInfo__label small-text">Availability</span>
          <span>
            {" "}
            {availabilityToWords(driverData.availability.hour_availability).map(
              (text) => (
                <div key={`${text}-${store.driver}`}>{text}</div>
              )
            )}
          </span>
        </div>
      )}
    </div>
  );
};

export default DriverInfo;
