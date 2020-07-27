import React from "react";
/** Styles **/
import "./SlotView.css";

const SlotView = ({ dateObj, bookedData }) => {
  return (
    <div>
      {bookedData && (
        <div className="SlotView__data-container">
          <span>Driver:</span>
          <div>{bookedData.driver}</div>
          <span>Description:</span>
          <div>{bookedData.description}</div>
        </div>
      )}
    </div>
  );
};

export default SlotView;
