import React from "react";
/** Constants **/
import { DRIVERS, DESCRIPTIONS } from "../../util/constants";

const EntryFormHandlers = () => {
  // spread drivers array for rendering
  const renderDriverDropdown = () => {
    return DRIVERS.map((driver, i) => {
      // excluse 'All' option
      if (i === 0) return;
      else
        return (
          <option key={`${driver}-dropdown`} value={driver}>
            {driver}
          </option>
        );
    });
  };

  // spread descriptions array for rendering
  const renderDescriptionDropdown = () => {
    return DESCRIPTIONS.map((description) => (
      <option key={`${description}-dropdown`} value={description}>
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
