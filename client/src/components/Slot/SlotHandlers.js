/** Constants **/
import { SET_DAY, SET_TIME } from "../../util/constants";
/** Redux **/
import dateReducer from "../../reducers/dateReducer";
import { setCurrentDate } from "../../actions/timetableNavigation";

const SlotHandlers = (dispatch) => {
  return {};
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
