import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          We're up!
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
