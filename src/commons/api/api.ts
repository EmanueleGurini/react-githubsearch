export const getData = async (user: string) => {
  let data = await fetch(`https://api.github.com/users/${user}`).then((res) =>
    res.json()
  );
  return data;
};
