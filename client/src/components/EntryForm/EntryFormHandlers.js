import React from "react";
/** Constants **/
import { DRIVERS, DESCRIPTIONS } from "../../util/constants";
/** npm **/
import { v4 as uuidv4 } from "uuid";

const EntryFormHandlers = () => {
  const renderDriverDropdown = () => {
    const driverDropdownItems = DRIVERS.map((driver) => (
      <option key={uuidv4()} value={driver}>
        {driver}
      </option>
    ));

    return <select name="drivers">{driverDropdownItems}</select>;
  };

  const renderDescriptionDropdown = () => {
    const descriptionDropdownItems = DESCRIPTIONS.map((description) => (
      <option key={uuidv4()} value={description}>
        {description}
      </option>
    ));

    return <select name="descrptions">{descriptionDropdownItems}</select>;
  };

  return {
    renderDriverDropdown,
    renderDescriptionDropdown,
  };
};

export default EntryFormHandlers;
