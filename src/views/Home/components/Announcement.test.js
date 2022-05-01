import { render, screen } from "@testing-library/react";
import Announcement from "./Announcement";

describe("Announcement", () => {
  test("render the announcement", () => {
    render(<Announcement announcement="WE'RE COMING SOON" />);
    const Element = screen.getByText(/COMING SOON/i);
    expect(Element).toBeInTheDocument();
  });
});
