import React, { useState, useEffect } from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import axios from "../axios";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";

import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import MovieCard from "../components/MovieCard";

import routes from "../routes";
import { createUseStyles } from "react-jss";

const MovieDetailsPage = ({ location, match, history }) => {
  const [movie, setMovie] = useState("");
  const [cast, setCast] = useState("");
  const [reviews, setReviews] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const useStyles = createUseStyles({
    container: {
      display: "block",
      textAlign: "center",
    },

    link: {
      fontSize: "20px",
      textDecoration: "none",
      color: "#049C95",
      "&:hover": {
        color: "#8801D2",
      },
    },

    linkActive: {
      color: "#8801D2",
    },
  });

  const styles = useStyles();

  const toggleLoader = () => {
    setIsLoading((prevState) => !prevState);
  };

  const goBack = (e) => {
    history.push(location?.state?.from || routes.home);
  };

  const { movieId } = match.params;

  useEffect(() => {
    async function getMovie() {
      toggleLoader();
      try {
        const res = await axios.get(`movie/${movieId}`);
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        toggleLoader();
      }
    }
    getMovie();
  }, [movieId]);

  useEffect(() => {
    async function getCast() {
      try {
        const res = await axios
          .get(`movie/${movieId}/credits`)
          .then((credits) => credits.data.cast.splice(1, 10));
        setCast(res);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = await axios.get(`movie/${movieId}/reviews`);
        setReviews(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <>
      {isLoading ? (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      ) : (
        <>
          <MovieCard onClick={goBack} movie={movie && movie} />
          <section className={styles.container}>
            <h3>Additional information</h3>
            <ul>
              <li key={uuidv4()}>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: location.state,
                  }}
                  className={styles.link}
                  activeClassName={styles.linkActive}
                >
                  Cast
                </NavLink>
              </li>
              <li key={uuidv4()}>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: location.state,
                  }}
                  className={styles.link}
                  activeClassName={styles.linkActive}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Route
              path={`${match.path}/cast`}
              render={(props) => <Cast {...props} cast={cast} />}
            ></Route>

            <Route
              path={`${match.path}/reviews`}
              render={(props) => <Reviews {...props} reviews={reviews} />}
            ></Route>
          </section>
        </>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
