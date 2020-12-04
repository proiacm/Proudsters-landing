import React, { Component } from 'react';
import About from './About/About';
import './App.css';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import Signup from './Signup/Signup';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <About />
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default App;
