import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import "./app.css";

const App = () => (
  <Router>
    <div>
      <header>
        <h2 className="siteName">
          Retune &ndash; Creative Technology Laboratory
        </h2>
      </header>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
