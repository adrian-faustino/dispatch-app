import React from "react";
/** Helpers **/
import { dayToWords } from "../../util/formatHelpers";

const Slot = ({ day, hour }) => {
  return (
    <div>
      <div>{`${dayToWords(day)} ${hour} h`}</div>
    </div>
  );
};

export default Slot;
