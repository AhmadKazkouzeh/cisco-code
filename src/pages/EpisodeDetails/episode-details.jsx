import { useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchOneEpisode } from "../../middleware";
import sanitizeHTML from "../../Utils/utils";

const EpisodeDetails = () => {
  let history = useHistory();
  let location = useLocation();

  const { episodeID } = location.state;

  const [episode, setEpisode] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await fetchOneEpisode(episodeID);
      setEpisode(data);
      setLoading(false);
    })();
  }, [episodeID]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      {" "}
      <div className="flex mt-10 ml-10">
        <button
          data-testid="back"
          onClick={() => history.goBack()}
          className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
              fill="currentColor"
            />
          </svg>
          <span className="mx-1">Back</span>
        </button>
      </div>
      <div className="flex justify-evenly flex-col md:flex-row mt-4 px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div>
          <img
            className="shadow-lg rounded w-full lg:max-w-md align-middle mt-4 border-none"
            src={episode.image?.original}
            alt={episode.name}
          />
        </div>
        <div className="ml-0 md:ml-10 mt-4 md:mt-0">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              {episode.airdate}
            </span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded">
              {episode.rating.average} / 10
            </a>
          </div>

          <div className="mt-2">
            <span className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
              {episode.name}
            </span>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {sanitizeHTML(episode.summary)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
