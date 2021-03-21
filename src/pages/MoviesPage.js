import { useState } from "react";
import axios from "../axios";
import Searchbar from "../components/Searchbar";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import MoviesList from "../components/MoviesList";
import { createUseStyles } from "react-jss";

const MoviesPage = (props) => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const useStyles = createUseStyles({
    container: {
      display: "block",
      textAlign: "center",
    },
  });

  const styles = useStyles();

  const toggleLoader = () => {
    setIsLoading((prevState) => !prevState);
  };

  async function getMovies() {
    try {
      toggleLoader();
      const res = await axios.get(`/search/movie?&query=${value}`);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoader();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Searchbar
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={value}
      />

      {isLoading ? (
        <Loader type="Oval" color="#049C95" height={80} width={80} />
      ) : (
        <MoviesList movies={movies} query={value} />
      )}
    </div>
  );
};

export default withRouter(MoviesPage);
