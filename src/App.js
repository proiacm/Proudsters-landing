import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          We're up!
        </header>
      </div>
    );
  }
}

export default App;
