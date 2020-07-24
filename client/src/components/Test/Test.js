import React from "react";
/** Styles **/
import "./Test.css";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions/timetableNavigation";
import { openForm, closeForm } from "../../actions/entryFormActions";
//delete later
import { entries } from "../../db/entries";

const Test = () => {
  /** Redux **/
  const counter = useSelector((state) => state.test);
  const date = useSelector((state) => state.date);
  const currentDriver = useSelector((state) => state.driver);
  const dispatch = useDispatch();
  const formOpen = useSelector((state) => state.entryForm);

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(increment(5));
  };

  const handledDecrement = (e) => {
    e.preventDefault();
    dispatch(decrement(5));
  };

  const handleFormToggle = (e) => {
    e.preventDefault();

    if (formOpen) {
      return dispatch(closeForm());
    } else {
      return dispatch(openForm());
    }
  };

  return (
    <div>
      <div>From Test.js</div>
      <button onClick={handledDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          console.log(entries);
        }}
      >
        show db
      </button>

      <button onClick={handleFormToggle}>toggle form</button>

      <hr />
      <div>Current driver: {currentDriver}</div>
      <div>Week {date.week}</div>
    </div>
  );
};

export default Test;
