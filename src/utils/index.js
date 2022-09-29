export const transformDataToArray = (item) => Object.entries(item);
export const transformSubDataToArray = (obj) =>
  obj.results.map((item) => transformDataToArray(item));
