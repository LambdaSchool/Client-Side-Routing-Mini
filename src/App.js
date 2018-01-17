import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { Home, About, Contact } from "./components";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route path="/" component={Home} exact />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
  </div>
);

export default App;
