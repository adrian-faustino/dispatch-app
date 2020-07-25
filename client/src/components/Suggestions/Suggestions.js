import React from "react";
/** Styles **/
import "./Suggestions.css";
/** Handlers **/
import SuggestionsHandlers from "./SuggestionsHandlers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";

const Suggestions = () => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = SuggestionsHandlers(dispatch, store);

  return (
    <div>
      <p>How about these nearby timeslots?</p>
    </div>
  );
};

export default Suggestions;
