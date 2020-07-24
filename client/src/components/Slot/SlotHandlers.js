/** Helpers **/
import entryValidation from "../../util/entryValidationHelpers";
import { dateObjToStringID } from "../../util/formatHelpers";

// param notes: dateObj is needed here to identify the current slot.
const SlotHandlers = (dispatch, dateObj, store) => {
  const validation = entryValidation(store.driver);

  const handleStyling = (callback) => {
    // check if slot is booked
    const dateID = dateObjToStringID(dateObj);
    const bookedData = validation.isBooked(dateID);
    callback(bookedData);
  };

  return { handleStyling };
};

export default SlotHandlers;
