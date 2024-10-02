import axios from "axios";

export const fetchImages = async (page = 0, query) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "RDSEqVs-6Yzftc_TylcCaIh3nvyKc4DchcbpUMf01Gc",
      query: query,
      page: page,
      per_page: 8,
    },
  });

  return data;
};
