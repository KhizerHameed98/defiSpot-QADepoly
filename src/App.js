import "./assets/css/style.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import browserRoute from "./Routes/browserRoutes";
import Home from "./components/Home/HeroHome";
import Market from "./components/Market/Market";
import PrivateRoute from "./components/HOC/PrivateRoute";
import BuyPlatform from "./components/BuyMarket/BuyPlatform";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute exact path={browserRoute.HOME} component={Home} />
          <PrivateRoute exact path={browserRoute.MARKET} component={Market} />
          <PrivateRoute
            exact
            path={browserRoute.BUYMARKET}
            component={BuyPlatform}
          />

          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
