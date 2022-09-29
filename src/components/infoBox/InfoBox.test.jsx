/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../tests/testUtils";
import { transformDataToArray } from "../../utils";
import testData from "../../tests/testData";
import InfoBox from "./InfoBox";

describe("InfoBox component works", () => {
  it("should render InfoBox component", async () => {
    const handledData = transformDataToArray(testData.results[0]);
    renderWithRouter(<InfoBox results={handledData} />);
    const infoBox = screen.getByText(/Luke Skywalker 1/i);
    expect(infoBox).toBeInTheDocument();
    expect(infoBox).toMatchSnapshot();
  });
});
