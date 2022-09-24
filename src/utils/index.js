export const transformSubDataToArray = (obj) =>
  obj.results.map((item) => Object.entries(item));

export const transformDataToArray = (item) => Object.entries(item);

export const getIdPageFrom = (list) => {
  let id = 0;
  if (list.length) {
    const url = list[list.length - 1][1];
    const arr = url.split("/");
    id = arr[arr.length - 2];
  }

  return id;
};
