import React from "react";
/** Styles **/
import "./EntryForm.css";
/** Handlers **/
import EntryFormHandlers from "./EntryFormHandlers";

const EntryForm = () => {
  /** Handlers **/
  const handlers = EntryFormHandlers();

  return (
    <div>
      <form>
        {handlers.renderDriverDropdown()}
        {handlers.renderDescriptionDropdown()}
      </form>
    </div>
  );
};

export default EntryForm;
