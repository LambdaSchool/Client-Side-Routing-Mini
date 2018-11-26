import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to='/'>
          <p>Home</p>
          </Link>
        </div>
        <div>
          <Link to='/about'>
          <p>About</p>
          </Link>
        </div>
        <div>
          <Link to='/contact'>
          <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
