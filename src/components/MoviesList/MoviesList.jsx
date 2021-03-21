import { Link, withRouter } from "react-router-dom";
import routes from "../../routes";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${routes.movies}/${id}`,
              state: {
                from: location,
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
