import React from 'react';
import './App.css';
import { Link, Redirect, Router } from '@reach/router';

import Home from './views/Home';
import Numberfour from './views/Numberfour';
import BlueRed from './views/BlueRed';


function App() {
  return (
    <div className="App">
        <Router>
          <Home path="/home" />
          
          <Numberfour path="/:x"/>
          <Redirect from="/" to="/4" noThrow="true" />
        
          <BlueRed path="/:id/:x/:y"/>
          <Redirect from="/" to="/hello/blue/red" noThrow="true" />
        </Router>
    </div>
  );
}

export default App;
