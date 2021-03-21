import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./routes";
import Loader from "react-loader-spinner";

const HomePage = lazy(() =>
  import("./pages/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage.js" /* webpackChunkName: "movie-details--page" */
  )
);

function App() {
  return (
    <>
      <Nav />
      <Suspense
        fallback={<Loader type="Oval" color="#00BFFF" height={80} width={80} />}
      >
        <Switch>
          <Route path={routes.home} exact component={HomePage}></Route>
          <Route
            path={routes.movieDetails}
            component={MovieDetailsPage}
          ></Route>
          <Route path={routes.movies} component={MoviesPage}></Route>
          <Route component={HomePage}></Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
