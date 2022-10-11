/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../tests/testUtils";
import testData from "../../tests/testData";
import Pagination from "./Pagination";

describe("Pagination component works", () => {
  it("should render Pagination component", async () => {
    renderWithProviders(<Pagination data={testData} />);
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
    expect(pagination).toMatchSnapshot();
  });
});
