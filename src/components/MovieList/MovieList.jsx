const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
