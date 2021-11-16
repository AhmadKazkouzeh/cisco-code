import React, { useState, useEffect, useCallback, memo } from "react";
import { fetchShowEpisodesData } from "../../middleware";
import EpisodeCard from "../Episode/EpidsodeCard/episode-card";
import PropTypes from "prop-types";

const SearchForm = ({ seasonID, handleSearchActive }) => {
  const [allShowEpisode, setAllShowEpisode] = useState();
  const [filteredData, setFilteredData] = useState();
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    (async () => {
      let data = await fetchShowEpisodesData();
      setAllShowEpisode(data);
    })();
  }, []);

  const handleSearch = useCallback((e) => {
    setTextInput(e.target.value);
    let value = e.target.value.toLowerCase();
    let result = allShowEpisode?.filter((item) =>
      item.summary.toLowerCase().includes(value)
    );
    if (value !== "") {
      setFilteredData(result);
      handleSearchActive(true);
    } else {
      setFilteredData([]);
      handleSearchActive(false);
    }
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex border-2 rounded">
          <input
            type="text"
            className="px-4 py-2 w-80"
            data-testid="search"
            id="search"
            name="search"
            placeholder="Search..."
            onChange={handleSearch}
            value={textInput}
          />
          <button
            className="flex items-center justify-center px-4 border-l"
            onClick={() => setTextInput("")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
            </svg>
          </button>
        </div>
      </div>
      {filteredData?.length >= 1 && (
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
