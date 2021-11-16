import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EpisodeCard = ({ id, key, name, number, season, image, summary }) => {
  return (
    <div
      className="flex flex-col justify-between flex-auto max-w-xs mx-auto my-6 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      key={key}>
      <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
          {name}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {summary?.replace(/(<([^>]+)>)/gi, "")}
        </p>
      </div>
      <div>
        <img
          className="object-cover w-full h-48 mt-2 self-end"
          src={image}
          alt={name}
        />
        <div className="flex items-center justify-between self-end px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">
            {`E${number}`}-{`S${season}`}
          </h1>
          <Link
            className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
            to={{
              pathname: "/episode-details",
              state: { episodeID: id },
            }}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

EpisodeCard.propTypes = {
  id: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  season: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};

export default EpisodeCard;
