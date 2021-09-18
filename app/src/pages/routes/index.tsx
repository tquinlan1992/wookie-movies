import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import MovieDetails from "../MovieDetails";
import { paths } from "./paths";
import { BrowserRouter as Router } from "react-router-dom";

const routes: { path: string; component: JSX.Element }[] = [
  { path: paths.HOME, component: <Home /> },
  { path: paths.MOVIE_DETAILS, component: <MovieDetails /> },
];
const NotFound: React.FC = () => <h1>Page Not Found</h1>;

const Routes = () => (
  <Router>
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact path={path} key={path}>
          {component}
        </Route>
      ))}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
