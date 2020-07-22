import React from "react";
/** Styles **/
import "./Test.css";
/** Redux **/
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions/timetableNavigation";

const Test = () => {
  /** Redux **/
  const counter = useSelector((state) => state.test);
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(increment(5));
  };

  const handledDecrement = (e) => {
    e.preventDefault();
    dispatch(decrement(5));
  };

  return (
    <div>
      <div>From Test.js</div>
      <button onClick={handledDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <h3>{counter}</h3>
      <div>Week {date.week}</div>
    </div>
  );
};

export default Test;
