import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "./nav-bar";

describe("Unit - Navbar", () => {
  test("Render the navbar component without errors", async () => {
    const { getByText, getByTestId } = render(<NavBar />);

    expect(getByText(/CISCO Code Challenge/i)).toBeInTheDocument();
    expect(getByTestId("toggle-theme")).toBeInTheDocument();
  });
});
