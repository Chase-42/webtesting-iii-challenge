// Test away
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<Dashboard /> component", () => {
  test("Render without crashing", () => {
    render(<Dashboard />);
  });
  test("Dashboard snapshot", () => {
    const wrapper = render(<Dashboard />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
  test("Show controls", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Lock Gate/i);
  });
  test("Show display", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/Unlocked/i);
  });
});

afterEach(cleanup);
