import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  const params = useParams();
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  useEffect(() => {
    async function fetchMovie() {
      try {
        // setLoading(true);
        const data = await fetchMovieDetails(params.movieId);
        setMovie(data);
        console.log(data);
        // setLoading(false);
      } catch (error) {
        // setError(true);
      }
    }
    fetchMovie();
  }, []);

  return (
    <div>
      {/* {loading && <p>Loading, please wait</p>}
      {error && (
        <p>Oops, something went wrong. Please try reloading this page!</p>
      )} */}

      {movie && (
        <div>
          <div className={css.container}>
            <img src={imgUrl} alt="photo" width="320" />

            <div>
              <h1>
                {movie.original_title} ({movie.release_date})
              </h1>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              {/* <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
