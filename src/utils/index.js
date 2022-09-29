export const transformSubDataToArray = (obj) =>
  obj.results.map((item) => Object.entries(item));

export const transformDataToArray = (item) => Object.entries(item);
