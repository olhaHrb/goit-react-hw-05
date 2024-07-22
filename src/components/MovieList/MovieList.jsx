import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
