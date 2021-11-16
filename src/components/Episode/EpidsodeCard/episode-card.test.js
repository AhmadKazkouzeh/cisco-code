import React from "react";
import { render, waitFor } from "@testing-library/react";
import EpisodeCard from "./episode-card";
import { BrowserRouter as Router } from "react-router-dom";

const mockEpisodeCardData = {
  id: 1,
  key: 1,
  name: "The Rose",
  number: "10",
  season: "1",
  seasonID: "859",
};
describe("Unit - Episode Card", () => {
  it("Render the episode card component without errors", async () => {
    const { getByText } = render(
      <Router>
        <EpisodeCard {...mockEpisodeCardData} />
      </Router>
    );

    await waitFor(() => {
      expect(getByText("The Rose")).toBeDefined();
      expect(getByText("E10-S1")).toBeDefined();
      expect(getByText("View details")).toBeDefined();
    });
  });
});
