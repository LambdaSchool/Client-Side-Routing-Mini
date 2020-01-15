import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />

    <Route exact path = '/'></Route>
    <Route path = '/about'></Route>
    <Route path = '/contact'></Route>

  </div>
);

export default App;
