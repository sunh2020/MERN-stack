import React from 'react';
import { Link } from '@reach/router';

const BlueRed = props => {
    
       
    return (
        <div>
        {/* <Link to = "/hello/blue/red">The word is: hello</Link> */}
        <p style={{ color: props.x, backgroundColor: props.y }}>The word is: {props.id}</p>
        <Link to="/home">Go Home</Link>
        </div>
    )
}

export default BlueRed;