import { withRouter } from "react-router-dom";
import noPhoto from "../../media/No-Photo-Available.jpg";
import styles from "./Cast.module.css";
const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.length > 0 &&
        cast.map(({ profile_path, name, id, character }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <img className={styles.avatar} src={noPhoto} alt={name} />
            )}

            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(Cast);
