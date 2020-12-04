import React from 'react';
import './Signup.css';

const Signup = () => {

  return (
    <div className='signup' id='signup'>
              <div className='contact'>
                <h1>Contact Us</h1>
                <input type="text" id="name" name="name" placeholder="Name"/>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <textarea id="subject" name="subject" placeholder="Tell us about you!" />
                <input type="submit" value="Send"/>
            </div>
    </div>
  )
}

export default Signup;