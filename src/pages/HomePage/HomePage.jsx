import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";
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
        // console.log(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      {loading && <p>Loading, please wait</p>}
      {error && (
        <p>Oops, something went wrong. Please try reloading this page!</p>
      )}

      {movies.length > 0 && (
        <>
          <h1>Trending today</h1>
          <MovieList movies={movies}></MovieList>
        </>
      )}
    </div>
  );
};

export default HomePage;
