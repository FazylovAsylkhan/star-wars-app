/* eslint-disable no-undef */
import { transformSubDataToArray, transformDataToArray } from "./index";

const arr = [
  ["firstKey", "firstProps"],
  ["secondKey", "secondProp"],
  ["thirdKey", "thirdProp"],
];
const obj = {
  firstKey: "firstProps",
  secondKey: "secondProp",
  thirdKey: "thirdProp",
};
const subdata = {
  results: [obj, obj],
};

describe("unit tests", () => {
  it("should transform Data To Array", () => {
    expect(transformDataToArray(obj)).not.toEqual(obj);
    expect(transformDataToArray(obj)).toEqual(arr);
  });
  it("should transform subData to array", () => {
    expect(transformSubDataToArray(subdata)).not.toEqual(subdata);
    expect(transformSubDataToArray(subdata)).toEqual([arr, arr]);
  });
});
