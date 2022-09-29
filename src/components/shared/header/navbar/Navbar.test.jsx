/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../../../tests/testUtils";
import Navbar from "./Navbar";

const links = [
  { url: "/", text: "Home" },
  { url: "/people", text: "People" },
  { url: "/planets", text: "Planets" },
  { url: "/starships", text: "Starships" },
];

describe("Navbar component works", () => {
  it("should render Navbar component", () => {
    renderWithRouter(<Navbar links={links} />);
    const navbar = screen.getByTestId(/navbar/i);
    expect(navbar).toBeInTheDocument();
  });

  it("should change class", async () => {
    renderWithRouter(<Navbar links={links} />);
    const user = userEvent.setup();
    const linkHome = screen.getByText(/Home/i);
    const linkPeople = screen.getByText(/People/i);
    expect(linkHome).toHaveClass("active");
    expect(linkPeople).not.toHaveClass("active");
    await user.click(linkPeople);
    expect(linkHome).not.toHaveClass("active");
    expect(linkPeople).toHaveClass("active");
  });
});
