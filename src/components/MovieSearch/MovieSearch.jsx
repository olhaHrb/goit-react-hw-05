import css from "./MovieSearch.module.css";

const MovieSearch = () => {
  return (
    <div className={css.container}>
      <input type="text"></input>
      <button type="submit">Search</button>
    </div>
  );
};

export default MovieSearch;
