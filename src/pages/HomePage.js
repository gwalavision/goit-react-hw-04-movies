import axios from "../axios";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MoviesList from "../components/MoviesList";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);

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
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default withRouter(HomePage);
