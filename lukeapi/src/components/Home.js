import React from 'react';
import { Link } from '@reach/router';

const Home = props => {
    return (
        <div>
           {/* <Link to ="/home">Welcome</Link> */}
           <p>Search for: {props.people}
                ID: {props.id}
           </p>
           <button>Search</button>
        </div>
    )
}

export default Home;