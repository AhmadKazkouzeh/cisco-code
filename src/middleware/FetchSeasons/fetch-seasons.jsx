import axios from "axios";

const fetchSeasonsData = async (showID) => {
  let url = `https://api.tvmaze.com/shows/${showID}/seasons`;
  return axios.get(url).then((response) => response.data);
};
export default fetchSeasonsData;
