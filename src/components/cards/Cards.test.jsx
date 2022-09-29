/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../tests/testUtils";
import { transformSubDataToArray } from "../../utils";
import testData from "../../tests/testData";
import Cards from "./Cards";

describe("Cards component works", () => {
  const handledData = transformSubDataToArray(testData);

  it("should render Cards component", async () => {
    renderWithProvidersAndRouter(
      <Cards results={handledData} data={testData} />
    );
    const cards = screen.getByTestId("cards");
    expect(cards).toBeInTheDocument();
    expect(cards).toMatchSnapshot();
  });

  it("number of cards should be 10", () => {
    renderWithProvidersAndRouter(
      <Cards results={handledData} data={testData} />
    );
    const numberOfCards = screen.getAllByRole("list").length;
    expect(numberOfCards).toBe(3);
  });
});
