
import React, { useState } from 'react';
import './App.css';
// import Pokemon from './components/Pokemon';
import AxiosPokemon from './components/AxiosPokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  
  return (
    <div className="pokemon">
      <h3>Pokemon Api</h3>
      <h2>{pokemon.name}</h2>
      {/* <Pokemon /> */}
      <AxiosPokemon />
      {/* <button className="button">Fetch Pokemon</button> */}
      
    </div>
    
  );
}

export default App;
