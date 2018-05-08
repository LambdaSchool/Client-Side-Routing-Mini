import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div className="nav">
          <NavLink className="nav-link"to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">about</NavLink>
          <NavLink className="nav-link" to="/contact">contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
