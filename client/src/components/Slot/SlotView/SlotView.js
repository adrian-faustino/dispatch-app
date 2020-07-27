import React, { useEffect, useState } from "react";
/** Styles **/
import "./SlotView.css";
/** Helpers **/
import { getDriverData } from "../../../util/driverDbHelpers";

const SlotView = ({ dateObj, bookedData }) => {
  /** State **/
  const [driverData, setDriverData] = useState(null);

  useEffect(() => {
    if (bookedData) {
      getDriverData(bookedData.driver, (data) => {
        console.log("data!", data);
        setDriverData(data);
      });
    }
  }, [bookedData]);

  const driverColor_css = driverData && {
    position: "absolute",
    top: 10,
    right: 10,
    display: "inline-block",
    background: driverData.color,
    height: 30,
    width: 30,
  };

  return (
    <div>
      {bookedData && driverData && (
        <div className="SlotView__data-container">
          <span>Driver</span>
          <div>
            {bookedData.driver}
            <div style={driverColor_css}></div>
          </div>
          <span>Description</span>
          <div>{bookedData.description}</div>
        </div>
      )}
    </div>
  );
};

export default SlotView;

/** Notes: logic for changing color depending on driver color and also if the booking is within their schedule or not **/
