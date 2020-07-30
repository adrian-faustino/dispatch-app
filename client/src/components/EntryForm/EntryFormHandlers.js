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

const EntryFormHandlers = (dispatch, values, handleChange) => {
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
    const options = DRIVERS.map((driver, i) => {
      // excluse 'All' option
      if (i === 0) return;
      else
        return (
          <option
            className="EntryForm__option"
            key={`${driver}-dropdown`}
            value={driver}
          >
            {driver}
          </option>
        );
    });

    return (
      <select
        className="EntryForm__select"
        value={values.driver || "DEFAULT"}
        name="driver"
        onChange={handleChange}
      >
        <option value="DEFAULT" disabled hidden>
          Choose driver
        </option>
        {options}
      </select>
    );
  };

  // spread descriptions array for rendering
  const renderDescriptionDropdown = () => {
    const options = DESCRIPTIONS.map((description) => (
      <option
        className="EntryForm__option"
        key={`${description}-dropdown`}
        value={description}
      >
        {description}
      </option>
    ));

    return (
      <select
        className="EntryForm__select"
        value={values.description || "DEFAULT"}
        name="description"
        onChange={handleChange}
      >
        <option value="DEFAULT" disabled hidden>
          Choose description
        </option>
        {options}
      </select>
    );
  };

  return {
    renderDriverDropdown,
    renderDescriptionDropdown,
    handleEmptyValue,
    handleValidation,
  };
};

export default EntryFormHandlers;
