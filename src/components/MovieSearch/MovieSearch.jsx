// import css from "./MovieSearch.module.css";

const MovieSearch = ({ onSearch }) => {
  const handleSearch = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { query } = form.elements;
    onSearch(query.value);
    // console.log(query.value);
    form.reset();
  };
  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
