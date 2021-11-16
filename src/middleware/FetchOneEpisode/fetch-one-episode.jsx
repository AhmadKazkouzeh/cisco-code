import axios from "axios";

const fetchOneEpisode = async (episodeID) => {
  let url = `https://api.tvmaze.com/episodes/${episodeID}`;
  return axios.get(url).then((response) => response.data);
};
export default fetchOneEpisode;
