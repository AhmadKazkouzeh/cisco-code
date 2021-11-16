import React from "react";
import { render } from "@testing-library/react";
import ShowDetails from "./show-details";

const mockShowDetailsData = {
  imageLink:
    "https://static.tvmaze.com/uploads/images/medium_portrait/364/911688.jpg",
  title: "Doctor Who",
  summary:
    "Adventures across time and space with the time travelling alien and companions.",
  imageTitle: "Doctor Who",
};
describe("Unit - Show Details", () => {
  test("Render the show details component without errors", () => {
    const { getByText, getByTestId, getByAltText } = render(
      <ShowDetails {...mockShowDetailsData} />
    );

    expect(getByText("Doctor Who")).toBeInTheDocument();
    expect(
      getByText(
        "Adventures across time and space with the time travelling alien and companions."
      )
    ).toBeInTheDocument();
    expect(getByTestId("testid_Doctor Who")).toHaveAttribute(
      "src",
      "https://static.tvmaze.com/uploads/images/medium_portrait/364/911688.jpg"
    );
    expect(getByAltText("Doctor Who")).toBeInTheDocument();
  });
});
