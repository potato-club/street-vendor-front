//"2023-04-25T17:37:25"
// To
// 2022-09-26 오후 9:18
export const formatDate = (value: string) => {
  const date = new Date(value);
  return value.substring(0, 10) + ' ' + date.toLocaleTimeString().slice(0, -3);
};
