import { DAY_WORDS } from "../util/constants";

/* Input: int. Output: string */
export const dayToWords = (index) => {
  return DAY_WORDS[parseInt(index)];
};

/* Input: obj. Output: string */
// converts date Obj to 'w-d-h' string
export const dateObjToStringID = (dateObj) => {
  const { week, day, hour } = dateObj;
  return `${week}-${day}-${hour}`;
};

// return hh:00 AM/PM
export const hourTo12hFormat = (hour) => {
  const _hour = parseInt(hour);
  if (_hour === 0) return "12:00 AM";
  if (_hour === 12) return "12:00 PM";
  if (_hour < 12) return `${_hour}:00 AM`;
  else return `${_hour - 12}:00 PM`;
};

// convert string 'w-d-y' to human words
export const dateStrToWords = (dateStr) => {
  if (!dateStr) return;
  const [week, day, hour] = dateStr.split("-");
  return `Week ${week}: ${dayToWords(day)}, ${hourTo12hFormat(hour)}`;
};

// convert string 'w-d-y' to date Obj
export const dateStrToObj = (dateStr) => {
  const [week, day, hour] = dateStr.split("-");
  return { week, day, hour };
};

// convert date obj to words
export const dateObjToWords = (dateObj) => {
  return dateStrToWords(dateObjToStringID(dateObj));
};

export const hourAMorPM = (hour) => {
  if (hour === 0) return "am";
  if (hour === 12) return "pm";
  if (hour < 12) return `am`;
  else return `pm`;
};

// take availability arr and convert to human text
// [9, 10, 11] => 9AM - 11AM
// Numbers need to be consecutive
export const consecutiveArrToWords = (arr) => {
  const start = hourTo12hFormat(arr[0]);
  const end = hourTo12hFormat(arr[arr.length - 1]);
  if (arr.length === 1) return `${start}`;
  return `${start} - ${end}`;
};

// returns consecutive strings of availability
// [9, 10, 11, 1,2,3] => ["9AM - 11AM", "1PM - 3PM"];
export const availabilityToWords = (arr) => {
  const consecutiveSets = [];
  let currentSet = [arr[0]];
  let prevNum = arr[0];

  arr.forEach((num, i) => {
    if (i === 0) return;

    // if consecutive, add to current set
    if (num - 1 === prevNum) currentSet.push(num);
    else {
      // else break set and start new one
      consecutiveSets.push(currentSet);
      currentSet = [];
      currentSet.push(num);
    }
    prevNum = num;

    // if at the end of array, push remaining set
    if (i === arr.length - 1) consecutiveSets.push(currentSet);
  });

  return consecutiveSets.map((set) => consecutiveArrToWords(set));
};
