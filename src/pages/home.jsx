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
  const [searchActive, setSearchActive] = useState(false);

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

  const handleSearchActive = (value) => {
    setSearchActive(value);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <ShowDetails
        imageTitle={show.name}
        imageLink={show.image.medium}
        title={show.name}
        summary={show.summary}
      />
      <SearchForm seasonID={seasonID} handleSearchActive={handleSearchActive} />
      {seasons && !searchActive && (
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
