import React, { useState, useEffect } from "react";
import ShowDetails from "../components/Show/show-details";
import { fetchSeasonsData, fetchShowData } from "../middleware";
import SeasonsList from "../components/Season/seasons-list";
import EpisodesList from "../components/EpisodesList/episodes-list";
import SearchForm from "../components/Search/search-form";

const Home = () => {
  const [show, setShow] = useState();
  const [seasons, setSeasons] = useState();
  const [isLoading, setLoading] = useState(true);

  const [seasonID, setSeasonID] = useState();

  useEffect(() => {
    (async () => {
      const showData = await fetchShowData();
      setShow(showData);
      const seasonsData = await fetchSeasonsData(showData.id);
      setSeasons(seasonsData);

      setLoading(false);
    })();
  }, []);

  const handleSeasonEpisodes = (id) => {
    setSeasonID(id);
  };

  const toggleTheme = () => {
    document.querySelector("body").className = document
      .querySelector("body")
      .className.includes("dark")
      ? ""
      : "dark";
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={toggleTheme}>
        Switch
      </button>
      <ShowDetails
        imageTitle={show.name}
        imageLink={show.image.medium}
        title={show.name}
        summary={show.summary}
      />
      <SearchForm seasonID={seasonID} />
      {seasons && (
        <>
          <div className="md:grid md:gap-3 md:h-screen h-auto md:grid-cols-5 p-5">
            <SeasonsList
              list={seasons}
              handleSeasonEpisodes={handleSeasonEpisodes}
              seasonID={seasonID}
            />
            {seasonID && <EpisodesList seasonID={seasonID} />}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
