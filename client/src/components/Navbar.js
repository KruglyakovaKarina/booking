import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>
          <span className='logo'>Booking</span>
        </Link>
        <div className='navItems'>
          <button className='navButton'>Register</button>
          <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
