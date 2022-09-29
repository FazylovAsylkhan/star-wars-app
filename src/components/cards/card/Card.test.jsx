/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../tests/testUtils";
import { transformDataToArray } from "../../../utils";
import testData from "../../../tests/testData";
import Card from "./Card";

describe("Card component works", () => {
  const handledData = transformDataToArray(testData.results[0]);
  it("should render Card component", async () => {
    renderWithRouter(<Card results={handledData} idPersonalPage={1} />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    expect(card).toMatchSnapshot();
  });
  it("Number of items in the card should be 15", () => {
    renderWithRouter(<Card results={handledData} idPersonalPage={1} />);
    const numberOfItems = screen.getAllByRole("listitem").length;
    expect(numberOfItems).toBe(8);
  });
});
