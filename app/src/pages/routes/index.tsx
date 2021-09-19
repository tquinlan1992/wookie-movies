import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import MovieDetails from "../movies/MovieDetails";
import { paths } from "./paths";

const routes: { path: string; component: JSX.Element }[] = [
  { path: paths.HOME, component: <Home /> },
  { path: paths.MOVIE_DETAILS, component: <MovieDetails /> },
];
const NotFound: React.FC = () => <h1>Page Not Found</h1>;

const Routes = () => (
  <Switch>
    {routes.map(({ path, component }) => (
      <Route exact path={path} key={path}>
        {component}
      </Route>
    ))}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
