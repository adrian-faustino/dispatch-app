import React from "react";
/** Constants **/
import {
  DRIVERS,
  DESCRIPTIONS,
  SET_ERROR,
  DRIVER_REQUIRED,
  DESCRIPTION_REQUIRED,
} from "../../util/constants";
/** Redux **/
import { setError } from "../../actions/errorActions";

const EntryFormHandlers = (dispatch, values) => {
  const handleEmptyValue = (errMsg) => {
    console.error(errMsg);
    dispatch(setError({ errMsg, payload: null }));
  };

  const handleValidation = (successCallback) => {
    if (!values.driver) return handleEmptyValue(DRIVER_REQUIRED);
    if (!values.description) return handleEmptyValue(DESCRIPTION_REQUIRED);

    successCallback();
  };

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
    handleEmptyValue,
    handleValidation,
  };
};

export default EntryFormHandlers;
