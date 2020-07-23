/** Redux **/
import { updateDate } from "../../actions/timetableNavigation";

const SlotHandlers = (dispatch) => {
  const handleClick = (dateObj) => {
    dispatch(updateDate(dateObj));
  };
  return { handleClick };
};

export default SlotHandlers;

//  // temporary - delete later
//  const createEntry = () => {
//   console.log("clicked!");
//   const time = `${date.week}-${day}-${hour}`;
//   const description = "Pick up";

//   // update db
//   entries[time] = { time, description };

//   // set temp view change
//   setTempIsBooked(true);
// };
