import React, { useState, useEffect, memo } from "react";
import { fetchShowEpisodesData } from "../../middleware";
import EpisodeCard from "../Episode/EpidsodeCard/episode-card";
import PropTypes from "prop-types";

const SearchForm = ({ seasonID, handleSearchActive }) => {
  const [allShowEpisode, setAllShowEpisode] = useState();
  const [filteredData, setFilteredData] = useState();
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    (async () => {
      let data = await fetchShowEpisodesData();
      setAllShowEpisode(data);
    })();
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = allShowEpisode?.filter((item) =>
      item.summary.toLowerCase().includes(value)
    );

    if (value !== "" && result.length >= 1) {
      setFilteredData(result);
      handleSearchActive(true);
      setNoMatch(false);
    } else if (value !== "" && result.length === 0) {
      setNoMatch(true);
    } else {
      setFilteredData([]);
      handleSearchActive(false);
    }
  };

  return (
    <>
      <div id="search" className="flex items-center justify-center">
        <div className="flex border-2 rounded">
          <input
            type="text"
            className="px-4 py-2 w-80 dark:bg-gray-700 focus:outline-none focus:ring focus:border-blue-300 dark:text-white"
            data-testid="search"
            id="search"
            name="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
      </div>
      {noMatch && (
        <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-blueGray-800 dark:text-white">
          Sorry, nothing found
        </p>
      )}
      {filteredData?.length >= 1 && !noMatch && (
        <div className="col-span-4 flex items-stretch -mx-4 flex-wrap">
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
  handleSearchActive: PropTypes.func.isRequired,
};
export default memo(SearchForm);
