/** Helpers **/
import { getOccupiedSlots } from "../../util/dbHelpers";
import { dateObjToStringID } from "../../util/formatHelpers";
import { WEEK, DAY, HOUR } from "../../util/constants";

const SuggestionsHandlers = (dispatch, store) => {
  // take current date
  const dateObj = store.date;
  const currentDate = dateObjToStringID(dateObj);
  // get occupied slots
  const occupiedSlots = getOccupiedSlots();
  console.log("Current date:", currentDate);
  console.log("Ahead date:", aheadDate(currentDate, WEEK, 3));

  // with filtered db, check slots for
  for (let date of occupiedSlots) {
    const [week, day, hour] = date.split("-");
  }
  // later today (1 hour or before)
  const calcWithinHour = () => {
    const
    const result = ['ahead', 'behind'];

    result.map(type => {
      switch(type) {
        case 'ahead':
          if ()
          return
      }
    })
  }

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

// function that takes a date string and increases the 'week' or 'day' or 'hour' - return string
function aheadDate(dateStr, selector, delta) {
  const [week, day, hour] = dateStr.split("-").map((e) => parseInt(e));

  switch (selector) {
    case WEEK:
      return `${week + delta}-${day}-${hour}`;
    case DAY:
      return `${week}-${day + delta}-${hour}`;
    case HOUR:
      return `${week}-${day}-${hour + delta}`;
  }
}
