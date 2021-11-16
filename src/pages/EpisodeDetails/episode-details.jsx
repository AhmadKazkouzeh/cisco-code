import { useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchOneEpisode } from "../../middleware";

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
    <>
      <div className="md:grid md:gap-3 md:h-screen h-auto  p-5">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => history.goBack()}>
          Back
        </button>
        <div className="max-w-2xl	">
          <img
            className="shadow-lg rounded max-w-full h-auto align-middle border-none"
            src={episode.image?.original}
            alt={episode.name}
          />
        </div>
        <div class="max-w-3xl	my-12 text-left">
          <div className="bg-white rounded-lg shadow dark:bg-gray-800 h-fit">
            <ul className="divide-y divide-gray-100">
              <li className="p-4 dark:text-white">Name: {episode.name}</li>
              <li className="p-4 dark:text-white">Season: {episode.season}</li>
              <li className="p-4  dark:text-white">Number: {episode.number}</li>
              <li className="p-4  dark:text-white">
                Summary: {episode.summary?.replace(/(<([^>]+)>)/gi, "")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpisodeDetails;
