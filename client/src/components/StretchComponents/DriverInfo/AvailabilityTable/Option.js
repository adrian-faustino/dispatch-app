import React, { useState } from "react";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";

// Passed down from TableCellHandlers.js
const Option = (props) => {
  /** State **/
  const [isSelected, setIsSelected] = useState(props.isSelected);
  const [cacheForSubmit, setCacheForSubmit] = useState(props.availability);

  const handleSelected = (e) => {
    // update cache
    // I have no idea why but this updates the driver availability even without submitting carcheForSubmit...
    if (isSelected) {
      setCacheForSubmit((state) => {
        const newArr = state;
        newArr.splice(state.indexOf(props.children), 1);
        return newArr;
      });
    } else {
      setCacheForSubmit((state) => {
        const newArr = state;
        newArr.push(props.children);
        return newArr;
      });
    }
    // toggle
    setIsSelected(!isSelected);
  };

  return (
    <option
      className={`AvailabilityTable__option ${
        isSelected && "AvailabilityTable__selected"
      }`}
      onClick={handleSelected}
    >
      {hourTo12hFormat(props.children)}
    </option>
  );
};

export default Option;
