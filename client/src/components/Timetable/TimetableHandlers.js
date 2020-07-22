/** Redux **/
import { nextWeek, prevWeek } from "../../actions/timetableNavigation";

const timeTableHandlers = (dispatch) => {
  const goNextWeek = (e) => {
    e.preventDefault();

    // todo: validate so it doesnt go below 0 or 52 (week range)

    dispatch(nextWeek());
  };

  const goPrevWeek = (e) => {
    e.preventDefault();
    dispatch(prevWeek());
  };

  return {
    goNextWeek,
    goPrevWeek,
  };
};

export default timeTableHandlers;
