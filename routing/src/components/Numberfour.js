import React from 'react';
import { Link } from '@reach/router';

const Numberfour = props => {

    return (
       
        <div>
        {/* <Link to = "/4">The number is: 4</Link> */}
        <p>The {isNaN(props.x)? "word":"number"} is:{props.x}</p>
                <Link to="/home">Go Home</Link>
        </div>
    );
   
}

export default Numberfour;