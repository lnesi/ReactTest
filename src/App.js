import React, { Component } from 'react';
import './App.css';
import Generator from './components/Generator.js';
import Grid from './components/Grid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="img/logo.png" className="App-logo" alt="logo" />
        </header>
        <Generator/>
        <Grid/>
      </div>
    );
  }
}

export default App;
