import React, { Component } from 'react';
import './App.css';
import 'flag-icon-css/css/flag-icon.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Landing from './Pages/Landing';
import Exchange from './Pages/Exchange';
import Header from './Components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Router basename="/react/">
         <div>
          <Header/>
          <Route exact path="/"  component={Landing}/>
          <Route path="/exchange/:base" component={Exchange}/>
          </div>
       </Router>

      </div>
    );
  }
}

export default App;
