import React from "react";
/** Styles **/
import "./EntryForm.css";
/** Handlers **/
import EntryFormHandlers from "./EntryFormHandlers";
/** Custom hooks */
import useForm from "../../hooks/useFormHook";
/** Helpers **/
import { createEntry, editEntry } from "../../util/dbHelpers";
/** Redux **/
import { useSelector } from "react-redux";
/** Reacstrap **/
import { Button } from "reactstrap";

const EntryForm = ({ handleEntrySuccess, bookedData, setFormOpen }) => {
  /** State **/
  const [values, handleChange, handleSubmit, handleReset] = useForm(() => {
    // if edit mdoe
    if (bookedData) {
      return editEntry(values, dateObj, handleEntrySuccess);
    }

    // new entry
    createEntry(values, dateObj, handleEntrySuccess);
  });

  /** Redux **/
  const dateObj = useSelector((state) => state.date);

  /** Handlers **/
  const handlers = EntryFormHandlers();

  const handleCloseForm = (e) => {
    e.preventDefault();
    setFormOpen(false);
  };

  return (
    <div className="EntryForm__container">
      <Button close onClick={handleCloseForm} />

      <form className="EntryForm__form" onSubmit={handleSubmit}>
        <select
          value={values.driver}
          defaultValue={bookedData ? bookedData.driver : "DEFAULT"}
          name="driver"
          onChange={handleChange}
        >
          <option value="DEFAULT" disabled hidden>
            Choose driver
          </option>
          {handlers.renderDriverDropdown()}
        </select>

        <select
          value={values.description}
          defaultValue={bookedData ? bookedData.description : "DEFAULT"}
          name="description"
          onChange={handleChange}
        >
          <option value="DEFAULT" disabled hidden>
            Choose description
          </option>
          {handlers.renderDescriptionDropdown()}
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EntryForm;
