import MovieList from "../../components/MovieList/MovieList";
import { fetchTrandingMovies } from "../../movies-api";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await fetchTrandingMovies();
        setMovies(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      {loading && <p>Loading, please wait</p>}
      {error && (
        <p>Oops, something went wrong. Please try reloading this page!</p>
      )}
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies}></MovieList>}
    </div>
  );
};

export default HomePage;
