import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("render the logo", () => {
    render(<Home />);
    const LogoElement = screen.getByText(/OBASE APPAREL/i);
    expect(LogoElement).toBeInTheDocument();
  });

  test("render the announcement", () => {
    render(<Home />);
    const LogoElement = screen.getByText(/COMING SOON/i);
    expect(LogoElement).toBeInTheDocument();
  });

  test("render the description", () => {
    render(<Home />);
    const DescriptionElement = screen.getByText(/Hello/i);
    expect(DescriptionElement).toBeInTheDocument();
  });

  test("render the email text input", () => {
    render(<Home />);
    const emailInputElement = screen.getByPlaceholderText(/Email Address/i);
    expect(emailInputElement).toBeInTheDocument();
  });
});
