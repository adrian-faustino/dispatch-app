import React, { useEffect, useState } from "react";
/** Styles **/
import "./SlotView.css";
/** Helpers **/
import { getDriverData } from "../../../util/driverDbHelpers";
/** Redux **/
import { useSelector } from "react-redux";
/** npm **/
import classNames from "classnames";

const SlotView = ({ dateObj, bookedData }) => {
  /** State **/
  const [driverData, setDriverData] = useState(null);

  /** Redux **/
  const store = useSelector((state) => state);
  const { showBookableSlots, showOutsideAvailability } = store.viewFilters;

  useEffect(() => {
    if (bookedData) {
      getDriverData(bookedData.driver, (data) => {
        setDriverData(data);
      });
    }
  }, [bookedData]);

  /** Notes: logic for changing color depending on driver color and also if the booking is within their schedule or not **/

  // style card based on driver settings (color)
  const driverColor_css = driverData && {
    position: "absolute",
    top: 10,
    right: 10,
    display: "inline-block",
    background: driverData.color,
    height: 30,
    width: 30,
  };

  const viewFilterClassnames = classNames({
    "bookable-slot": showBookableSlots,
  });

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
