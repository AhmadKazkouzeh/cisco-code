import React from "react";
import PropTypes from "prop-types";
import sanitizeHTML from "../../Utils/utils";
const ShowDetails = ({ imageLink, title, summary, imageTitle }) => {
  const scrollToEpisodes = () => {
    document.getElementById("search").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-96">
          <img
            className="object-cover w-full h-full max-w-xs rounded-md"
            src={imageLink}
            alt={imageTitle}
            data-testid={`testid_${imageTitle}`}
          />
          <div className="ml-0 mt-10 md:mt-0 md:ml-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl text-left">
              {title}
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300 text-left">
              {sanitizeHTML(summary)}
            </p>
            <button
              onClick={scrollToEpisodes}
              data-testid="scrollToEpisodes"
              className="px-6 py-2 mt-6 text-sm flex font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none float-left">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"
                  fill="currentColor"
                />
              </svg>
              Explore Seasons and Episodes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ShowDetails.propTypes = {
  imageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
};
export default ShowDetails;
