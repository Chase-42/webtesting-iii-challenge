// Test away!
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

describe("<Display /> component", () => {
  it("Renders without crashing", () => {
    render(<Display />);
  });
  it("<Display /> snapshot", () => {
    const wrapper = render(<Display />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
  it("Display is unlocked and open at start", () => {
    const wrapper = render(<Display />);
    const unlocked = wrapper.queryByText(/unlocked/i);
    const open = wrapper.queryByText(/open/i);
    expect(unlocked).toBeVisible();
    expect(open).toBeVisible();
  });
  it("Display gate as closed if closed prop is passed", () => {
    const { getByText } = render(<Display closed />);
    getByText(/closed/i);
  });
  it("Display gate as locked if locked prop is passed", () => {
    const { getByText } = render(<Display locked />);
    getByText(/locked/i);
  });
  it("Use red-led class when locked", () => {
    const { queryByText } = render(<Display locked />);
    const status = queryByText(/locked/i);
    expect(status).toHaveClass("red-led");
  });
  it("Use red-led class when closed", () => {
    const { queryByText } = render(<Display closed />);
    const status = queryByText(/closed/i);
    expect(status).toHaveClass("red-led");
  });
  it("Use green-led class when unlocked", () => {
    const { queryByText } = render(<Display />);
    const status = queryByText(/unlocked/i);
    expect(status).toHaveClass("green-led");
  });
  it("Use green-led class when open", () => {
    const { queryByText } = render(<Display />);
    const status = queryByText(/open/i);
    expect(status).toHaveClass("green-led");
  });
});

afterEach(cleanup);
