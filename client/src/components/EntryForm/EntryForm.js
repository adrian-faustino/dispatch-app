import React from "react";
/** Styles **/
import "./EntryForm.css";
/** Handlers **/
import EntryFormHandlers from "./EntryFormHandlers";
/** Custom hooks */
import useForm from "../../hooks/useFormHook";

const EntryForm = () => {
  /** State **/
  const [values, handleChange, handleSubmit, handleReset] = useForm(() => {
    console.log("Submitting to db:", values);
    handleReset();
  });

  /** Handlers **/
  const handlers = EntryFormHandlers();

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
