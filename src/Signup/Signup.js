import React from 'react';
import './Signup.css';
import logo from '../Images/logo.png';

const Signup = () => {

  return (
    <div className='signup'>
      <img className='logo' src={logo}/>
              <div className='contact'>
                <input type="text" id="name" name="name" placeholder="Name"/>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <textarea id="subject" name="subject" placeholder="Tell us about you!" />
                <input type="submit" value="Send"/>
            </div>
    </div>
  )
}

export default Signup;