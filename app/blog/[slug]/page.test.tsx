/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
  render(await Page({ params: Promise.resolve({ slug: "Test" }) }));
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("longho should be displayed in document", async () => {
  render(await Page({ params: Promise.resolve({ slug: "Test" }) }));
  expect(screen.getByText("longho")).toBeInTheDocument();
});
