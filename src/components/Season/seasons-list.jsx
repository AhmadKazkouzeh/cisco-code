import React from "react";
import PropTypes from "prop-types";

const SeasonsList = ({ handleSeasonEpisodes, list, seasonID }) => {
  const active = (id) => {
    if (id === seasonID) {
      return "bg-green-300 ";
    } else {
      return "";
    }
  };
  return (
    <>
      <div className="col-span-1 rounded-lg  h-fit bg-white shadow dark:bg-gray-800">
        <ul className="divide-y divide-gray-100">
          {list.map((season) => (
            <li
              key={season.id}
              data-testid={`id_${season.id}`}
              className={`p-4 hover:bg-gray-400 dark:text-white text-center ${active(
                season.id
              )}`}
              onClick={() => handleSeasonEpisodes(season.id)}>
              Season {season.number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

SeasonsList.propTypes = {
  handleSeasonEpisodes: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  seasonID: PropTypes.number,
};

export default SeasonsList;
