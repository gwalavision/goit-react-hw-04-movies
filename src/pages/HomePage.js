import axios from "../axios";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import { createUseStyles } from "react-jss";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);

  const useStyles = createUseStyles({
    container: {
      display: "block",
      textAlign: "center",
    },
  });

  const styles = useStyles();

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await axios.get("trending/movie/week");
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.container}>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default withRouter(HomePage);
