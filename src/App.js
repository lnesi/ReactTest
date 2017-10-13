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
  componentDidMount(){
   //mdc.autoInit();
  }
  render() {
    return (
      <div className="App">
       <Router>
         <div>
          <Header/>
          <Route exact path="/react"  component={Landing}/>
          <Route path="/react/exchange/:base" component={Exchange}/>
          </div>
       </Router>

      </div>
    );
  }
}

export default App;
