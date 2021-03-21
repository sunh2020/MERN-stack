import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState(0);

    const fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                return response.json()
        })
            .then(response => { 
                setPokemon({
                    pokemon: response.results
            })
        }) 

    }

 
    return (
        
        <div>
            <button onClick={ () => fetchPokemon()}>Fetch Pokemon</button>
            
                {pokemon.pokemon ? pokemon.pokemon.map((item, index)=>{
               return (<div key={index}>{item.name}</div>)
            }):null}
                       
        </div>
    );
}
export default Pokemon;