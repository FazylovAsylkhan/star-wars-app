/* eslint-disable no-undef */
import React from "react";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import {
  renderWithProvidersAndRouter,
  renderWithRouter,
  LocationDisplay,
  handleRequest,
} from "./testUtils";
import AppRoutes from "../components/router/AppRoutes";
import Header from "../components/shared/header";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

describe("App works", () => {
  const server = setupServer(...handleRequest);

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("should render the Home page", async () => {
    const { user } = renderWithProvidersAndRouter(<App />);

    expect(screen.getByText(/This is home page!/i)).toBeInTheDocument();

    await user.click(screen.getByText(/people/i));
    expect(screen.getByText(/This is people page!/i)).toBeInTheDocument();
    expect(await screen.findByText(/Luke Skywalker 1/i)).toBeInTheDocument();
  });

  it("should render the Error page", async () => {
    renderWithRouter(<App />, { route: "/some/error/route" });

    expect(screen.getByText(/This is NotFound page!/i)).toBeInTheDocument();
  });

  it("rendering a component that uses useLocation", async () => {
    const route = "/some-route";
    renderWithRouter(<LocationDisplay />, { route: route });

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });
});
