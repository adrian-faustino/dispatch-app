/** Helpers **/
import { getOccupiedSlots } from "../../util/dbHelpers";
import { dateObjToStringID } from "../../util/formatHelpers";

const SuggestionsHandlers = (dispatch, store) => {
  // take current date
  const dateObj = store.date;
  const currentDate = dateObjToStringID(dateObj);
  // get occupied slots
  const occupiedSlots = getOccupiedSlots();

  // with filtered db, check slots for
  for (let date of occupiedSlots) {
    console.log("Date:", date);
  }
  // later today (1 hour or before)
  // return +/- 1 hour
  // const calcWithinHour = () => {
  //   const currentHour = dateObj.hour;
  //   const hourAhead = dateObj
  // }

  // later this week

  // next week

  return {};
};

export default SuggestionsHandlers;
