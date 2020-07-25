import React, { useEffect, useState } from "react";
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
  /** State **/
  const [withinDay, setWithinDay] = useState([]);
  const [withinWeek, setWithinWeek] = useState([]);
  const [differentWeek, setDifferentWeek] = useState([]);

  /** Redux **/
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  /** Handlers **/
  const handlers = SuggestionsHandlers(dispatch, store);

  useEffect(() => {
    setWithinDay(handlers.generateSuggestions(HOUR_SELECTOR));
    setWithinWeek(handlers.generateSuggestions(DAY_SELECTOR));
    setDifferentWeek(handlers.generateSuggestions(WEEK_SELECTOR));
  }, []);

  console.log("Within same day", handlers.generateSuggestions(HOUR_SELECTOR));
  console.log("Within same week", handlers.generateSuggestions(DAY_SELECTOR));
  console.log("Different week", handlers.generateSuggestions(WEEK_SELECTOR));

  return (
    <div>
      <p>How about these nearby timeslots?</p>

      <p>Within the same day:</p>
      <select>{handlers.renderSuggestions(withinDay)}</select>

      <p>Within the same week:</p>
      <select>{handlers.renderSuggestions(withinWeek)}</select>

      <p>Different week:</p>
      <select>{handlers.renderSuggestions(differentWeek)}</select>
    </div>
  );
};

export default Suggestions;
