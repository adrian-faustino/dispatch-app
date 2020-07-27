import React from "react";
/** Styles **/
import "./EntryForm.css";
/** Handlers **/
import EntryFormHandlers from "./EntryFormHandlers";
/** Custom hooks */
import useForm from "../../hooks/useFormHook";
/** Helpers **/
import { createEntry, editEntry } from "../../util/dbHelpers";
import { dateObjToStringID } from "../../util/formatHelpers";
/** Reacstrap **/
import { Button } from "reactstrap";
/** Schema **/
import { Entry } from "../../db/schema/Entry";
/** Constants **/
import {
  submit_btn,
  DRIVER_REQUIRED,
  DESCRIPTION_REQUIRED,
} from "../../util/constants";
/** Redux **/
import { useDispatch } from "react-redux";

const EntryForm = (props) => {
  const { handleEntrySuccess, bookedData, setFormOpen, dateObj } = props;

  /** State **/
  const initState = bookedData && bookedData;
  const [values, handleChange, handleSubmit, handleReset] = useForm(
    initState,
    () => {
      // validation
      handlers.handleValidation(() => {
        // new submission
        const entryObj = Entry({
          date: dateObjToStringID(dateObj),
          driver: values.driver,
          description: values.description,
        });

        if (bookedData) return editEntry(entryObj, handleEntrySuccess);
        else createEntry(entryObj, handleEntrySuccess);
      });
    }
  );

  /** Redux **/
  const dispatch = useDispatch();

  /** Handlers **/
  const handlers = EntryFormHandlers(dispatch, values, handleChange);

  const handleCloseForm = (e) => {
    e.preventDefault();
    setFormOpen(false);
  };

  return (
    <div className="EntryForm__container">
      <Button close onClick={handleCloseForm} />

      <form className="EntryForm__form" onSubmit={handleSubmit}>
        {/* Driver dropdown */}
        {handlers.renderDriverDropdown()}

        {/* Description dropdown */}
        {handlers.renderDescriptionDropdown()}

        <button type="submit">{submit_btn}</button>
      </form>
    </div>
  );
};

export default EntryForm;
