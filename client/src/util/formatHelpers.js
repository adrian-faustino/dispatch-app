/* Input: int. Output: string */
export const dayToWords = (index) => {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return DAYS[parseInt(index)];
};

/* Input: obj. Output: string */
// converts date Obj to 'w-d-h' string
export const dateObjToStringID = (dateObj) => {
  const { week, day, hour } = dateObj;
  return `${week}-${day}-${hour}`;
};

// convert string 'w-d-y' to words
export const dateStrToWords = (dateStr) => {
  if (!dateStr) return;
  const [week, day, hour] = dateStr.split("-");
  return `Week ${week}: ${dayToWords(day)}, ${hour}h`;
};

// convert date obj to words
export const dateObjToWords = (dateObj) => {
  console.log("date obj!!", dateObj);
  return dateStrToWords(dateObjToStringID(dateObj));
};

// todo: have an hour formatter
