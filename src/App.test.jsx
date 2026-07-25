import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders the navigation and the projects page by default", () => {
    render(<App />);

    expect(screen.getAllByRole("navigation").length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /projects/i }).length,
    ).toBeGreaterThan(0);
  });
});
