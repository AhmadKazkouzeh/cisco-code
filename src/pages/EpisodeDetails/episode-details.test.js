import React from "react";
import { render, waitFor } from "@testing-library/react";

import EpisodeDetails from "./episode-details";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

jest.mock("../../middleware", () => {
  return {
    __esModules: true,
    fetchOneEpisode: jest.fn().mockResolvedValue({
      id: 859,
      url: "https://www.tvmaze.com/seasons/859/doctor-who-season-1",
      number: 1,
      name: "Pilot",
      episodeOrder: 13,
      airdate: "2005-12-25",
      rating: { average: 7 },
      summary:
        "<p>When the residents of Chester's Mill find themselves trapped under a massive</p>",
    }),
  };
});
describe("Unit - Episode Details", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("Render the episode detail component without errors", async () => {
    const history = createMemoryHistory();
    const route = "/episode-details";
    const state = { episodeID: 13900 };

    history.push(route, state);

    const { getByText, getByTestId } = render(
      <Router history={history}>
        <EpisodeDetails />
      </Router>
    );

    await waitFor(async () => {
      expect(getByTestId(/Back/i)).toBeInTheDocument();

      expect(getByText(/2005-12-25/i)).toBeInTheDocument();
      expect(getByText("7 / 10")).toBeInTheDocument();

      expect(getByText(/Pilot/i)).toBeInTheDocument();
      expect(
        getByText(
          /When the residents of Chester's Mill find themselves trapped under a massive/i
        )
      ).toBeInTheDocument();
    });
  });
});
