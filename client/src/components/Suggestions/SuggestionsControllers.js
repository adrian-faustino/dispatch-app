import React from "react";
import { dateStrToWords } from "../../util/formatHelpers";
/** Handlers **/
import SuggestionsHandlers from "./SuggestionsHandlers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";

const SuggestionsControllers = ({ suggestions }) => {
  const { withinDay, withinWeek, differentWeek } = suggestions;
  /** Redux **/
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  /** Handlers **/
  const handlers = SuggestionsHandlers(dispatch, store);

  return (
    <section>
      <p>Within the same day:</p>
      {handlers.renderSuggestions(withinDay)}

      <p>Within the same week:</p>
      {handlers.renderSuggestions(withinWeek)}

      <p>Different week:</p>
      {handlers.renderSuggestions(differentWeek)}
    </section>
  );
};

export default SuggestionsControllers;
