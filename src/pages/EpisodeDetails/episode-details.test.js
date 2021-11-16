import React from "react";
import { render, waitFor } from "@testing-library/react";

import EpisodeDetails from "./episode-details";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Unit - Episode Details", () => {
  test("Render the episode detail component without errors", async () => {
    const history = createMemoryHistory();
    const route = "/episode-details";
    const state = { episodeID: 13900 };

    history.push(route, state);

    const { getByText } = render(
      <Router history={history}>
        <EpisodeDetails />
      </Router>
    );

    await waitFor(async () => {
      expect(getByText(/The Poison Sky/i)).toBeInTheDocument();
      expect(
        getByText(
          /As the Sontarans choke the Earth, the Doctor and UNIT battle to keep both Martha and Donna alive./i
        )
      ).toBeInTheDocument();
    });
  });
});
