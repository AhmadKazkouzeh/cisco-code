import React from "react";
import { render, waitFor } from "@testing-library/react";

import EpisodeDetails from "./episode-details";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useLocation: jest.fn().mockImplementation(() => {
    return { state: { seasonID: "10", episodeID: "9" } };
  }),
}));

describe("Unit - Episode Details", () => {
  test("Render the episode detail component without errors", async () => {
    const history = createMemoryHistory();
    const route = "/episode-details";
    const state = { seasonID: 123, episodeID: 456 };

    history.push(route, state);

    const { getByText } = render(
      <Router history={history}>
        <EpisodeDetails />
      </Router>
    );

    await waitFor(async () => {
      expect(getByText("Episode details")).toBeDefined();
    });
  });
});
