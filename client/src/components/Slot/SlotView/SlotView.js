import React from "react";

const SlotView = ({ dateObj, bookedData }) => {
  return (
    <div>
      {bookedData && (
        <div>
          <div>Driver: {bookedData.driver}</div>
          <div>Description: {bookedData.description}</div>
        </div>
      )}
    </div>
  );
};

export default SlotView;
