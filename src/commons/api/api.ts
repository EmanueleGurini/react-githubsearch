export const getData = async (user: string) => {
  let data = await fetch(`https://api.github.com/users/${user}`).then((res) =>
    res.json()
  );
  return data;
};

export const setBackgroundTheme = (light: boolean): void => {
  let backgroundColor = light ? "#f6f8ff" : "#141D2F";
  document.body.style.background = backgroundColor;
};
