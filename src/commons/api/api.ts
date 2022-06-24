/**
 * This function fetch all user's data throught API and returns them converted in a JSON structure
 *
 * @param user is a string value.
 *
 * */
export const getData = async (user: string) => {
  let data = await fetch(`https://api.github.com/users/${user}`).then((res) =>
    res.json()
  );
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
