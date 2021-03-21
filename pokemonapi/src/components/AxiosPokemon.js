import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPokemon = (props) => {
    //Note the second argument is an empty array. We are only 
    const [axiosPokemon, setAxiosPokemon] = useState([]);

    const fetchPokemon = () => {
        console.log(fetchPokemon)
    
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => { 
           console.log(response.data.results)
           setAxiosPokemon(response.data.results)
        })
        .catch(error => console.log(error))
    } 
     

    return(

        <div>
            <button onClick={ () => fetchPokemon()}>Fetch Pokemon</button>
            {
                axiosPokemon.map((pokemonObject, index) => 
                <p key={index}>
                    {pokemonObject.name}
                </p>)
            }
            {/* {axiosPokemon.axiosPokemon ? axiosPokemon.axiosPokemon.map((item, index)=>{
               return (<div key={index}>{item.name}</div>)
            }):null} */}
        </div>
    )
}

export default AxiosPokemon;