import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact, } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
)

export default App;
