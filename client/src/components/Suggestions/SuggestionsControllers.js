import React from "react";
import { dateStrToWords } from "../../util/formatHelpers";

const SuggestionsControllers = ({ suggestion }) => {
  const handleBookSuggestion = () => {
    console.log("Booking", suggestion);
  };

  return (
    <li onClick={handleBookSuggestion}>
      <div>{dateStrToWords(suggestion)}</div>
    </li>
  );
};

export default SuggestionsControllers;
