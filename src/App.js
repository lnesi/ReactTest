import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as mdc from 'material-components-web';
import Landing from './Pages/Landing';
import Exchange from './Pages/Exchange';
import Header from './Components/Header';

class App extends Component {
  componentDidMount(){
    mdc.autoInit();
  }
  render() {
    return (
      <div className="App">

       <Router>
         <div>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route path="/exchange/:base" component={Exchange}/>
          </div>
       </Router>

      </div>
    );
  }
}

export default App;
