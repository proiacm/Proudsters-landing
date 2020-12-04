import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll';

const Nav = () => {

  return (
      <div className='nav'>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="landing" spy={true} smooth={true}><u>Home</u></Link></p>
          <p className='nav-li'><Link style={{ cursor: "pointer"}} to="about" spy={true} smooth={true}><u>About</u></Link></p>
      </div>
  )
}

export default Nav;