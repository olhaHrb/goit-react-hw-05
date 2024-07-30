import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const params = useParams();
  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await fetchMovieCast(params.movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [params.movieId]);

  console.log(cast);

  return (
    <div>
      {cast !== null && (
        <ul className={css.list}>
          {cast.map(({ id, name, profile_path }) => (
            <li key={id}>
              <div className={css.item}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt="photo"
                  width="120"
                />

                {name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
