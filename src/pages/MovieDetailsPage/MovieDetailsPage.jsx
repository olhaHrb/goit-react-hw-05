import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../movies-api";
import Navigation from "../../components/Navigation/Navigation";
import { useParams, NavLink, Outlet } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { FiArrowLeft } from "react-icons/fi";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(params.movieId);
        setMovie(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchMovie();
  }, [params.movieId]);

  return (
    <div>
      {loading && <p>Loading, please wait</p>}
      {error && (
        <p>Oops, something went wrong. Please try reloading this page!</p>
      )}

      {movie && (
        <div>
          <Navigation></Navigation>
          <button className={css.button}>
            <FiArrowLeft />
            Go back
          </button>
          <div className={css.container}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "../../img/film-projector-55122_640.png"
              }
              alt="photo"
              width="320"
            />

            <div>
              <h1>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </h1>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <ul className={css.genresList}>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
