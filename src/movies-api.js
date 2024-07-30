import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTNkZmE3YmExNGRlNjY2MmJiZjk4YjllZjliNzE5ZiIsIm5iZiI6MTcyMTM4NTEwMi4zNTg2NCwic3ViIjoiNjY5YTM0ZjIxMGFiMTNlMjIyOTQxODA5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gFSHOs9K7O_jKF1aMxcmVPQG5niVcJbcNQGy5pspm4Q",
  },
};

export const fetchTrandingMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}?language=en-US'`, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(
    `/movie/${id}/credits?language=en-US`,
    options
  );
  return response.data;
};
