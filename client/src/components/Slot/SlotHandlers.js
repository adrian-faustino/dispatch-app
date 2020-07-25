/** Helpers **/
import entryValidation from "../../util/entryValidationHelpers";
import { dateObjToStringID } from "../../util/formatHelpers";
/** Redux **/
import { updateDate } from "../../actions/timetableNavigation";

// param notes: dateObj is needed here to identify the current slot.
const SlotHandlers = (dispatch, dateObj, store) => {
  const validation = entryValidation(store.driver);

  const handleSlotClick = () => {
    // prevent unnecessary store update
    if (dateObjToStringID(store.date) === dateObjToStringID(dateObj)) return;
    else dispatch(updateDate(dateObj));
  };

  const handleStyling = (callback) => {
    // check if slot is booked
    const dateID = dateObjToStringID(dateObj);
    const bookedData = validation.isBooked(dateID);
    callback(bookedData);
  };

  return { handleStyling, handleSlotClick };
};

export default SlotHandlers;
