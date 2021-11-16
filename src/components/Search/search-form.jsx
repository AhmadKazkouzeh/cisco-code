import React, { useState, useEffect, useCallback, memo } from "react";
import { fetchShowEpisodesData } from "../../middleware";
import EpisodeCard from "../Episode/EpidsodeCard/episode-card";
import PropTypes from "prop-types";

const SearchForm = ({ seasonID }) => {
  const [allShowEpisode, setAllShowEpisode] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    (async () => {
      let data = await fetchShowEpisodesData();
      setAllShowEpisode(data);
    })();
  }, []);

  const handleSearch = useCallback((e) => {
    let value = e.target.value.toLowerCase();
    let result = allShowEpisode?.filter((item) =>
      item.summary.toLowerCase().includes(value)
    );
    if (value !== "") {
      setFilteredData(result);
    } else setFilteredData([]);
  });

  return (
    <>
      <div>
        <label htmlFor="search">Search episodes with a keyword:</label>
        <input
          data-testid="search"
          id="search"
          name="search"
          type="text"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {filteredData?.length >= 1 && (
        <div className="grid grid-cols-3 gap-4">
          <br />
          <h2>Search results</h2>
          {filteredData.map((episode) => (
            <EpisodeCard
              id={episode.id}
              name={episode.name}
              number={episode.number}
              season={episode.season}
              link={episode.url}
              seasonID={seasonID}
              image={
                episode.image
                  ? episode.image.original
                  : "https://i.imgur.com/65kbdU0.jpeg"
              }
              summary={episode.summary}
            />
          ))}
        </div>
      )}
    </>
  );
};

SearchForm.propTypes = {
  seasonID: PropTypes.number,
};
export default memo(SearchForm);
