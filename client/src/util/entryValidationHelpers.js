import { entries } from "../db/entries";

// check if entry already exists
export const isBooked = (dateObj) => {
  const { week, day, hour } = dateObj;
  const entryID = `${week}-${day}-${hour}`;
  if (entries.hasOwnProperty(entryID)) return true;
  return false;
};
