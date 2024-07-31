import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await fetchMovieReviews(params.movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [params.movieId]);

  console.log(reviews);

  return (
    <div>
      {reviews !== null && (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <div className={css.item}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
