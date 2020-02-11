import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Events from "../views/Events";
import Stats from "../views/Stats";
import Pois from "../views/Pois";
import Error from "../views/Error";
import routes from "./routes";
import Header from "../views/Header";

const CustomRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home}>
          <Home />
        </Route>
        <Route exact path={routes.events}>
          <Header />
          <Events />
        </Route>
        <Route exact path={routes.stats}>
          <Header />
          <Stats />
        </Route>
        <Route exact path={routes.pois}>
          <Header />
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
