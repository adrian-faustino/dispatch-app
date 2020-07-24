import { INVALID_ENTRY_OBJ } from "../../util/constants";

// validate if an entry is valid
// NOT validating if entry exists in db
export const Entry = (entryObj) => {
  // validate if no params passed
  if (!entryObj) return console.error(INVALID_ENTRY_OBJ);

  const { date, description, driver } = entryObj;

  // validate if missing fields
  if (!date || !description || !driver) return console.error(INVALID_ENTRY_OBJ);

  console.log("New entry object created:", { date, description, driver });
  return { date, description, driver };
};
