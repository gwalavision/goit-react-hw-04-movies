import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    justifyContent: "space-around",
  },

  link: {
    fontSize: "40px",
    textDecoration: "none",
    transition: " all 0.2s",
    color: "#049C95",
    "&:hover": {
      color: "#8801D2",
    },
  },

  linkActive: {
    color: "#8801D2",
  },
});

const Nav = () => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <NavLink
        exact
        to={routes.home}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Nav;
