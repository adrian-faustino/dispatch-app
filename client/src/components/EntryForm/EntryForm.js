import React from "react";
/** Styles **/
import "./EntryForm.css";
/** Handlers **/
import EntryFormHandlers from "./EntryFormHandlers";
/** Custom hooks */
import useForm from "../../hooks/useFormHook";
/** Helpers **/
import { createEntry } from "../../util/dbHelpers";
/** Redux **/
import { useSelector } from "react-redux";

const EntryForm = ({ handleEntrySuccess }) => {
  /** State **/
  const [values, handleChange, handleSubmit, handleReset] = useForm(() => {
    createEntry(values, dateObj, handleEntrySuccess);
  });

  /** Redux **/
  const dateObj = useSelector((state) => state.date);

  /** Handlers **/
  const handlers = EntryFormHandlers();

  return (
    <div className="EntryForm__container">
      <form className="EntryForm__form" onSubmit={handleSubmit}>
        <select defaultValue="DEFAULT" name="driver" onChange={handleChange}>
          <option value="DEFAULT" disabled hidden>
            Choose driver
          </option>
          {handlers.renderDriverDropdown()}
        </select>

        <select
          defaultValue="DEFAULT"
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
