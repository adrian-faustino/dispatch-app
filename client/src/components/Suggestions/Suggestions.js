import React from "react";
/** Styles **/
import "./Suggestions.css";
/** Handlers **/
import SuggestionsHandlers from "./SuggestionsHandlers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
/** Constants **/
import {
  WEEK_SELECTOR,
  DAY_SELECTOR,
  HOUR_SELECTOR,
} from "../../util/constants";

const Suggestions = () => {
  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = SuggestionsHandlers(dispatch, store);

  console.log("Within same day", handlers.generateSuggestions(HOUR_SELECTOR));
  console.log("Within same week", handlers.generateSuggestions(DAY_SELECTOR));
  console.log("Different week", handlers.generateSuggestions(WEEK_SELECTOR));

  return (
    <div>
      <p>How about these nearby timeslots?</p>
    </div>
  );
};

export default Suggestions;
