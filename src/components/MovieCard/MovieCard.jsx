import noPoster from "../../media/no-poster.jpg";
import { createUseStyles } from "react-jss";

const MovieCard = ({ onClick, movie }) => {
  const useStyles = createUseStyles({
    container: {
      position: "relative",
      display: "block",
      textAlign: "center",
    },
    button: {
      position: "absolute",
      top: "0",
      left: "0",

      display: "inline-block",
      padding: "0.35em 1.2em",
      border: "0.1em solid #FFFFFF",
      margin: "0 0.3em 0.3em 0",
      borderRadius: "0.12em",
      boxSizing: "border-box",
      textDecoration: "none",
      color: "#FFFFFF",
      backgroundColor: "#049C95",
      textAlign: "center",
      transition: " all 0.2s",
      "&:hover": {
        backgroundColor: "#8801D2",
      },
    },

    genres: {
      marginRight: "5px",
    },
  });

  const styles = useStyles();

  const { poster_path, title, name, vote_average, overview, genres } = movie;
  return (
    <section className={styles.container}>
      <button type="button" onClick={onClick} className={styles.button}>
        Go back
      </button>
      {poster_path && (
          <img src={noPoster} width={300} alt={title ? title : name} />
        ) && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title ? title : name}
          />
        )}

      <h2>{title ? title : name}</h2>
      {vote_average && (
        <p>
          User score:
          <span>{vote_average * 10}&#37;</span>
        </p>
      )}

      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && (
        <p>
          {genres.map((genre) => (
            <span key={genre.id} className={styles.genres}>
              {genre.name}
            </span>
          ))}
        </p>
      )}
    </section>
  );
};

export default MovieCard;
