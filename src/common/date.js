export const currentDay = () => {
  const today = new Date();

  const data = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  return data;
};
