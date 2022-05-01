import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

test("render the logo", () => {
  render(<Logo />);
  const LogoElement = screen.getByText(/OBASE APPAREL/i);
  expect(LogoElement).toBeInTheDocument();
});
