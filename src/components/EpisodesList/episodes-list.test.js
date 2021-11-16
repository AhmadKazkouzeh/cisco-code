import React from "react";
import { render, waitFor } from "@testing-library/react";
import EpisodeList from "./episodes-list";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../middleware", () => {
  return {
    __esModules: true,
    fetchEpisodesData: jest.fn().mockResolvedValue([
      {
        id: 1,
        name: "The First Pitch Insufficiency",
        number: "4",
        season: "11",
        image: { original: "google.com" },
        summary: "helloworld",
      },
      {
        id: 1,
        name: "The Rose",
        number: "4",
        season: "12",
        image: { original: "google.com" },
        summary: "helloworld",
      },
    ]),
  };
});
const mockEpisodesListData = {
  seasonID: "210",
};
describe("Unit - Episode List", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Render the episode list component without errors", async () => {
    const { getByText } = render(
      <Router>
        <EpisodeList {...mockEpisodesListData} />
      </Router>
    );

    await waitFor(() => {
      expect(getByText("The First Pitch Insufficiency")).toBeDefined();
      expect(getByText("E4-S11")).toBeDefined();

      expect(getByText("The Rose")).toBeDefined();
      expect(getByText("E4-S12")).toBeDefined();
    });
  });
});
