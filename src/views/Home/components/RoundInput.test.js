import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RoundInput from "./RoundInput";

describe("RoundInput", () => {
  test("handle input change", () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    render(
      <RoundInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value=""
        name="test"
        placeholder="test"
      />
    );

    for (let i = 0; i < 3; i++) {
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: 'test@test.com' },
      });
    }

    expect(handleChange).toBeCalledTimes(3);
  });
  test("can submit", () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    render(
      <RoundInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value=""
        name="test"
        placeholder="test"
      />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleSubmit).toBeCalled();
  });
});
