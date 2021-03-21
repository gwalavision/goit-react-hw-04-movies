import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "../axios";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";

import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

import noPoster from "../media/no-poster.jpg";
import routes from "../routes";

const MovieDetailsPage = ({ location, match, history }) => {
  const [movie, setMovie] = useState("");
  const [cast, setCast] = useState("");
  const [reviews, setReviews] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoader = () => {
    setIsLoading((prevState) => !prevState);
  };

  const goBack = () => {
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
  console.log(location);
  return (
    <>
      {isLoading ? (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      ) : (
        <>
          <section>
            <button type="button" onClick={goBack}>
              Go back
            </button>
            {movie.poster_path && (
                <img
                  src={noPoster}
                  width={300}
                  alt={movie.title ? movie.title : movie.name}
                />
              ) && (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title ? movie.title : movie.name}
                />
              )}

            <h2>{movie.title ? movie.title : movie.name}</h2>
            {movie.vote_average && (
              <p>
                User score:
                <span>{movie.vote_average * 10}&#37;</span>
              </p>
            )}

            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {movie.genres && (
              <p>
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </p>
            )}
          </section>
          <section>
            <h3>Additional information</h3>
            <ul>
              <li key={uuidv4()}>
                <NavLink to={`${match.url}/cast`}>Cast</NavLink>
              </li>
              <li key={uuidv4()}>
                <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
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

export default MovieDetailsPage;
