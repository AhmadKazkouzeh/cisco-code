import React from "react";
import PropTypes from "prop-types";

const ShowDetails = ({ imageLink, title, summary, imageTitle }) => {
  return (
    <>
      <div className="container flex px-6 py-4 mx-auto lg:h-128 lg:py-16 justify-center">
        <div className="flex items-center justify-center w-full h-96 lg:w-1/4">
          <img
            className="object-coverrounded-md"
            src={imageLink}
            alt={imageTitle}
            data-testid={`testid_${imageTitle}`}
          />
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:w-1/2">
          <div className="max-w-lg">
            <h1 className="font-bold text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-gray-300 text-gray-600">
              {summary?.replace(/(<([^>]+)>)/gi, "")}
            </p>
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
