import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "./search-form";

const mockSearchFormData = {
  seasonID: "210",
};

describe("Unit - Search Form", () => {
  it("Render the search Form component without errors", async () => {
    const { getByTestId } = render(<SearchForm {...mockSearchFormData} />);

    expect(getByTestId("search")).toBeInTheDocument();
  });
});
