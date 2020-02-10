import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "../views/Events";
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
        <Route path={routes.error}>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default CustomRouter;
