import React, { useState } from "react";
import { dateObjToWords } from "../../util/formatHelpers";
/** Handlers **/
import SuggestionsHandlers from "./SuggestionsHandlers";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
/** Reactstrap **/
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

const SuggestionsControllers = ({ suggestions }) => {
  const { withinDay, withinWeek, differentWeek } = suggestions;

  /** State **/
  const [state, setState] = useState({
    dropdownOpen: false,
    selectedSuggestion: {},
  });

  /** Redux **/
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  /** Handlers **/
  const handlers = SuggestionsHandlers(dispatch, store, setState);

  const toggle = () => {
    setState((state) => ({ ...state, dropdownOpen: !state.dropdownOpen }));
  };

  return (
    <section>
      <Dropdown isOpen={state.dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Choose available timeslot</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Within the same day:</DropdownItem>
          {handlers.renderSuggestions(withinDay)}
          <DropdownItem divider />

          <DropdownItem header>Within the same week;</DropdownItem>
          {handlers.renderSuggestions(withinWeek)}
          <DropdownItem divider />

          <DropdownItem header>Different week:</DropdownItem>
          {handlers.renderSuggestions(differentWeek)}
        </DropdownMenu>
      </Dropdown>
      <Button>{dateObjToWords(state.selectedSuggestion)}</Button>
    </section>
  );
};

export default SuggestionsControllers;
