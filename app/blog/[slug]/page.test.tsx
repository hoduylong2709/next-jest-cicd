/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("longho should be displayed in document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("longho")).toBeInTheDocument();
});
