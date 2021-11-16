import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "./search-form";

const mockSearchFormData = {
  seasonID: "210",
};

describe("Unit - Search Form", () => {
  it("Render the search Form component without errors", async () => {
    const { getByLabelText } = render(<SearchForm {...mockSearchFormData} />);

    expect(getByLabelText("Search episodes with a keyword:")).toBeDefined();
  });
});
