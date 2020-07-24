/** Helpers **/
import entryValidation from "../../util/entryValidationHelpers";

// param notes: dateObj is needed here to identify the current slot.
const SlotHandlers = (dispatch, dateObj, store) => {
  const validation = entryValidation(store.driver);

  const handleStyling = (callback) => {
    // check if slot is booked
    const bookedData = validation.isBooked(dateObj);
    callback(bookedData);
  };

  return { handleStyling };
};

export default SlotHandlers;
