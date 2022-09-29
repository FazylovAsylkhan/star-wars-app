/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../tests/testUtils";
import ButtonMore from "./ButtonMore";

describe("ButtonMore component works", () => {
  it("should render ButtonMore component", async () => {
    renderWithRouter(<ButtonMore index={1} />);
    const button = screen.getByText(/More.../i);
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });
});
