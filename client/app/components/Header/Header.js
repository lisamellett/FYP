import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <nav>
      <Link to="/calendar">Calendar</Link>
    </nav>
    <nav>
      <Link to="/performance">Performance Reviews</Link>
    </nav>


    <hr />
  </header>
);

export default Header;
