//Using React, we will be learning front-end routing with Scott Roberts
//We want to do Fetch and Axios
//State management and props
//Installing React Router is a webpackage that helps with front-end routing

import React from 'react';
import './App.css';
import Business from './Components/Business'
import Home from './Components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Keyword exact in Route tells you, you want exactly to match the URL
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
          <Home />
        <Route exact= "/business" component={Business}>
          <Business hello="Hello!" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
