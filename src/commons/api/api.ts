/**
 * This function fetch all user's data throught API and returns them converted in a JSON structure
 *
 * @param user is a string value.
 *
 * */
export const getData = async (user: string) => {
  let data = await fetch(`https://api.github.com/users/${user}`);
  data = await data.json();
  return data;
};

/**
 * This function sets the app's background color targetting the dom's body element through the document.body property
 *
 * @param light is a boolean value
 *
 * */
export const setBackgroundTheme = (light: boolean): void => {
  let backgroundColor = light ? "#f6f8ff" : "#141D2F";
  document.body.style.background = backgroundColor;
};

/**
 * This function converts numeric value in month
 *
 * @param monthNumber
 *
 * */
export const toMonthName = (monthNumber: any) => {
  //TODO: fix type arg

  // this code comes from https://bobbyhadz.com/blog/javascript-convert-month-number-to-name
  // explore https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth

  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString("EN-en", {
    month: "short",
  });
};

/**
 * This function gets data from API and convert this data in a string "Joined day month(short) year"
 *
 * @param data
 *
 * */
export const getJoinedProfile = (data: string | undefined): string | null => {
  if (!data) return null;
  let result = data.split("T").splice(0, 1).join().split("-");

  return `Joined ${result[2]} ${toMonthName(result[1])} ${result[0]}`;
};
