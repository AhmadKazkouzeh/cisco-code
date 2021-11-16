import axios from "axios";

const fetchShowEpisodesData = async () => {
  return axios
    .get("https://api.tvmaze.com/shows/210/episodes")
    .then((response) => response.data);
};
export default fetchShowEpisodesData;
