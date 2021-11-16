import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import SeasonsList from "./seasons-list";

const mockSeasonsListDataArray = [
  {
    id: 859,
    url: "https://www.tvmaze.com/seasons/859/doctor-who-season-1",
    number: 1,
    name: "",
    episodeOrder: 13,
    premiereDate: "2005-03-26",
    endDate: "2005-12-25",
  },
  {
    id: 860,
    url: "https://www.tvmaze.com/seasons/860/doctor-who-season-2",
    number: 2,
    name: "",
    episodeOrder: 13,
    premiereDate: "2006-04-15",
    endDate: "2006-12-25",
  },
];
const mockHandleSeasonEpisodes = jest.fn();

describe("Unit - Seasons List", () => {
  test("Render the seasons list component without errors", async () => {
    const { getByText, getByTestId } = render(
      <SeasonsList
        list={mockSeasonsListDataArray}
        handleSeasonEpisodes={mockHandleSeasonEpisodes}
      />
    );

    await waitFor(() => {
      expect(getByText("Season 1")).toBeDefined();
      expect(getByText("Season 2")).toBeDefined();
    });

    fireEvent.click(getByTestId("id_860"));
    expect(mockHandleSeasonEpisodes).toHaveBeenCalledTimes(1);
  });
});
