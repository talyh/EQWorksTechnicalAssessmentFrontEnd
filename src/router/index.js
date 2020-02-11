import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "../views/Events";
import Stats from "../views/Stats";
import Pois from "../views/Pois";
import Error from "../views/Error";
import routes from "./routes";

const CustomRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home}>
          {/* <Home /> */}
        </Route>
        <Route exact path={routes.events}>
          <Events />
        </Route>
        <Route exact path={routes.stats}>
          <Stats />
        </Route>
        <Route exact path={routes.pois}>
          <Pois />
        </Route>
        <Route path={routes.error}>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default CustomRouter;
