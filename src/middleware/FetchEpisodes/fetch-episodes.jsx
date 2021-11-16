import axios from "axios";

const fetchEpisodesData = async (seasonID) => {
  let url = `https://api.tvmaze.com/seasons/${seasonID}/episodes`;
  return axios.get(url).then((response) => response.data);
};
export default fetchEpisodesData;
