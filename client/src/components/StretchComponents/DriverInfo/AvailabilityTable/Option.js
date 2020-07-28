import React, { useState } from "react";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";

const Option = (props) => {
  /** State **/
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
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
