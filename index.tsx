import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";
import Header from "./header";
import Footer from "./footer";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);




const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
