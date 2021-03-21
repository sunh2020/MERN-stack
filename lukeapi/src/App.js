import React from 'react';
import './App.css';
import { Link, Redirect, Router } from '@reach/router';

import Home from './components/Home';
import Search from './components/Search';
import People from './components/People';
import Planets from './components/Planets';

function App() {

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  return (
    <div className="App">
       <Router>
          <Home path="/home" />
               
          <Search path="/:id/:x"/>
          <Redirect from="/" to="/people/1" noThrow="true" />


      </Router>
      <form>
          <div>
            <label>Search for:</label>
            <p>{people.name}</p>
            <input
              onChange={(event) => {
                setPeople(event.target.value);
                
              }}
              type="text"
            />
            </div>
            <div>
            <label>ID:</label>
            <p>{id}</p>
            <input
              onChange={(event) => {
                setPlanets(event.target.value);
                
              }}
              type="text"
            />
            </div>
      </form>      
      <People />
      <Planets />
    </div>
    
   
  );
  }

export default App;
