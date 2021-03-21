const Searchbar = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit} value={value}>
      <label htmlFor={1}>
        Enter the film title
        <input type="text" id={1} value={value} onChange={onChange}></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
