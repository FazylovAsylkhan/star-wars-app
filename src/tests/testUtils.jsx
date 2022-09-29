import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { rest } from "msw";
import { BrowserRouter, useLocation } from "react-router-dom";
import appStore from "../store";
import responseData from "./testData";

export const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export function renderWithProviders(
  ui,
  { store = appStore, ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderWithProvidersAndRouter(
  ui,
  { store = appStore, ...renderOptions } = {},
  { route = "/" } = {}
) {
  window.history.pushState({}, "Test page", route);

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return {
    user: userEvent.setup(),
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export const handleRequest = [
  rest.get("https://swapi.dev/api/people/", (req, res, ctx) =>
    res(ctx.json(responseData), ctx.delay(150))
  ),
];

export function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}
