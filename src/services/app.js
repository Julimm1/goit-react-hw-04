import axios from "axios";

export const fetchImages = async (page = 0, query) => {
  const ACCESS_KEY = "RDSEqVs-6Yzftc_TylcCaIh3nvyKc4DchcbpUMf01Gc";
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`
  );
  return data.results;
};
