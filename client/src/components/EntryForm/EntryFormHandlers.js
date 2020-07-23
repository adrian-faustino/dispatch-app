import React from "react";
/** Constants **/
import { DRIVERS, DESCRIPTIONS } from "../../util/constants";
/** npm **/
import { v4 as uuidv4 } from "uuid";

const EntryFormHandlers = () => {
  // spread drivers array for rendering
  const renderDriverDropdown = () => {
    return DRIVERS.map((driver) => (
      <option key={uuidv4()} value={driver}>
        {driver}
      </option>
    ));
  };

  // spread descriptions array for rendering
  const renderDescriptionDropdown = () => {
    return DESCRIPTIONS.map((description) => (
      <option key={uuidv4()} value={description}>
        {description}
      </option>
    ));
  };

  return {
    renderDriverDropdown,
    renderDescriptionDropdown,
  };
};

export default EntryFormHandlers;
