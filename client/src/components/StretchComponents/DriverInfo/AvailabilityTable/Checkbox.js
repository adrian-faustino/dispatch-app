import React, { useEffect, useState } from "react";
/** Reactstrap */
import { Label, Form, FormGroup, Input } from "reactstrap";
/** Helpers **/
import { hourAMorPM } from "../../../../util/formatHelpers";

// handlers passed down from DriverHandlers.js
const Checkbox = ({ handlers, hour, dayIndex }) => {
  /** State **/
  const [checked, setChecked] = useState(false);

  // set checked initial state
  useEffect(() => {
    if (!handlers.driverData.availability[dayIndex]) return setChecked(false);

    if (handlers.driverData.availability[dayIndex].includes(hour))
      setChecked(true);
    else setChecked(false);
  }, [handlers.driverData.availability[dayIndex]]);

  const removeFromArray = (arr, elem) => {
    let newArr = arr;
    const index = arr.indexOf(elem);
    if (~index) newArr.splice(index, 1);
    return newArr;
  };

  const handleChange = () => {
    // setChecked(!checked);
    handlers.setDriverData((state) => {
      const { availability } = state;
      let newAvailObj = availability;
      let newHourArr = availability[dayIndex]
        ? [...availability[dayIndex]]
        : [];

      // if it exists, remove
      if (newHourArr.includes(hour)) {
        console.log("Adding to cache...", newHourArr);
        newHourArr = removeFromArray(newHourArr, hour);
      }
      // else add
      else {
        console.log("Removing from cache...");
        newHourArr.push(hour);
      }

      newAvailObj[dayIndex] = newHourArr;
      return { ...state, availability: newAvailObj };
    });
  };

  return (
    <FormGroup>
      <Input
        onChange={handleChange}
        value={hour}
        type="checkbox"
        checked={checked}
      />
      <Label>{`${hour}${hourAMorPM(hour)}`}</Label>
    </FormGroup>
  );
};

export default Checkbox;
