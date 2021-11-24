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
  image: "imagelink",
  summary:
    "<p>When the residents of Chester's Mill find themselves trapped under a massive</p>",
};

describe("Unit - Episode Card", () => {
  it("Render the episode card component without errors", async () => {
    const { getByText } = render(
      <Router>
        <EpisodeCard {...mockEpisodeCardData} />
      </Router>
    );

    await waitFor(() => {
      expect(getByText("The Rose")).toBeInTheDocument();
      expect(getByText("E10-S1")).toBeInTheDocument();
      expect(getByText("View details")).toBeInTheDocument();
    });
  });
});
