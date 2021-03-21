import { NavLink } from "react-router-dom";
import routes from "../../routes";
const Nav = () => {
  return (
    <header>
      <NavLink to={routes.home}>Home</NavLink>
      <NavLink to={routes.movies}>Movies</NavLink>
    </header>
  );
};

export default Nav;
