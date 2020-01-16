// Test away!
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import { fireEvent } from "@testing-library/react";

describe("<Controls /> Component", () => {
  it("Render without crashing", () => {
    render(<Controls />);
  });
  test("<Controls /> snapsnot", () => {
    const wrapper = render(<Controls />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it("Buttons are defined", () => {
    const wrapper = render(<Controls />);
    const lock = wrapper.getByText(/lock/i);
    const open = wrapper.getByText(/close/i);

    expect(lock).toBeDefined();
    expect(open).toBeDefined();
  });
  it("Closed toggle button is disabled if gate is locked", () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(
      <Controls locked={true} toggleClosed={toggleClosed} />
    );
    const closedBtn = getByText(/close gate/i);
    fireEvent.click(closedBtn);
    expect(toggleClosed).not.toHaveBeenCalled();
  });
  it("Locked toggle button is disabled if gate is open", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(
      <Controls closed={false} toggleLocked={toggleLocked} />
    );
    const lockedBtn = getByText(/lock gate/i);
    fireEvent.click(lockedBtn);
    expect(toggleLocked).not.toHaveBeenCalled();
  });
});

afterEach(cleanup);
