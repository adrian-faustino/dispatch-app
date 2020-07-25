import React from "react";
import { dateStrToWords } from "../../util/formatHelpers";

const SuggestionsControllers = ({ suggestion }) => {
  const handleBookSuggestion = () => {
    console.log("Booking", suggestion);
  };

  return (
    <option onClick={handleBookSuggestion}>{dateStrToWords(suggestion)}</option>
  );
};

export default SuggestionsControllers;
