import { render, screen } from "@testing-library/react";
import Description from "./Description";

describe("Description", () => {
  test("render the announcement", () => {
    render(<Description description="Hello fellow shoppers" />);
    const Element = screen.getByText(/fellow shoppers/i);
    expect(Element).toBeInTheDocument();
  });
});
