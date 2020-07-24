import React from "react";
/** Helpers **/
import { dayToWords } from "../../../util/formatHelpers";

const SlotView = ({ dateObj, bookedData }) => {
  /** Variables **/
  const { week, day, hour } = dateObj;
  const _day = dayToWords(day);

  return (
    <div>
      <div>{`${_day} ${hour} h`}</div>

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
