export const transformDataToArray = (item) => Object.entries(item);
export const transformSubDataToArray = (obj) =>
  obj.results.map((item) => transformDataToArray(item));

const getArrPages = (data) => {
  const arr = [];
  const countOfPage = Math.ceil(data.count / 10);
  const getUrl = (i) => {
    const arrUrl = data.next ? data.next.split("/") : data.previous.split("/");
    arrUrl.splice(-1, 1, `?page=${i}`);
    const url = arrUrl.join("/");

    return { text: i, url };
  };

  for (let i = 1; i <= countOfPage; i += 1) {
    arr.push(getUrl(i));
  }

  return arr;
};

export const getButtons = (data) => [
  { text: "Previous", url: data.previous },
  ...getArrPages(data),
  { text: "Next", url: data.next },
];
