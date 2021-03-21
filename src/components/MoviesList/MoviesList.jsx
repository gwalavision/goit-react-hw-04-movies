import { Link, withRouter } from "react-router-dom";
import routes from "../../routes";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  list: {
    display: "block",
    textAlign: "center",
  },

  listItem: {
    listStyle: "none",
  },

  link: {
    fontSize: "24px",
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

const MoviesList = ({ movies, location, query }) => {
  const styles = useStyles();
  return (
    <ul className={styles.list}>
      {movies.map(({ title, name, id }) => (
        <li key={id} className={styles.listItem}>
          <Link
            className={styles.link}
            to={{
              pathname: `${routes.movies}/${id}`,
              state: {
                from: location,
                search: query,
              },
            }}
          >
            {title ? title : name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
