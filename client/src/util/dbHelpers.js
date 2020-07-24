/** DB **/
import { entries } from "../db/entries";

export const createEntry = (values, dateObj, callback) => {
  const { week, day, hour } = dateObj;
  const { driver, description } = values;
  const entryID = `${week}-${day}-${hour}`;

  // validate

  // update db
  entries[entryID] = { hour, description, driver };

  // after successful entry
  callback();
};
