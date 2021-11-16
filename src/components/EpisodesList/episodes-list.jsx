import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import EpisodeCard from "../Episode/EpidsodeCard/episode-card";
import { fetchEpisodesData } from "../../middleware";

const EpisodesList = ({ seasonID }) => {
  const [episodesList, setEpisodesList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchEpisodesData(seasonID);
      setEpisodesList(data);
    })();
  }, [seasonID]);

  return (
    <>
      <div className="col-span-4 flex items-stretch -mx-4 flex-wrap">
        {episodesList?.map((episode, k) => (
          <EpisodeCard
            key={k}
            id={episode.id}
            name={episode.name}
            number={episode.number}
            season={episode.season}
            image={
              episode.image
                ? episode.image.original
                : "https://i.imgur.com/65kbdU0.jpeg"
            }
            summary={episode.summary}
            seasonID={seasonID}
          />
        ))}
      </div>
    </>
  );
};

EpisodesList.propTypes = {
  seasonID: PropTypes.number.isRequired,
};

export default EpisodesList;
