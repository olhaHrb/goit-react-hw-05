import Navigation from "../../components/Navigation/Navigation";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { fetchSearchMovies } from "../../movies-api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("query") ?? "";

  const searchMovies = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
    console.log(searchValue);
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await fetchSearchMovies(searchValue);
        setMovies(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchMovies();
  };

  return (
    <div>
      <Navigation></Navigation>
      {loading && <p>Loading, please wait</p>}
      {error && (
        <p>Oops, something went wrong. Please try reloading this page!</p>
      )}
      <MovieSearch onSearch={searchMovies} />
      {movies.length > 0 && <MovieList movies={movies}></MovieList>}
    </div>
  );
};

export default MoviesPage;
