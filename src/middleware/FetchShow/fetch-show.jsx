import axios from "axios";

const fetchShowData = async () => {
  return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=doctor%20who")
    .then((response) => response.data);
};
export default fetchShowData;
