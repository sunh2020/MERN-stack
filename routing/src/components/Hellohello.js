import React from 'react';
import { Link } from '@reach/router';


// function isNaN(x)
//     if (isNaN(x)) {
//         return 'Not a number';
//       }
//       else {
//           return 'Number'
//       }

function Hellohello(props) {
    return (
        <div>
            {/* <Link to = "/hello">The word is: hello</Link> */}
            <p>The word is:{props.x}</p>
            <Link to="/home">Go Home</Link>
        </div>
    );
}

export default Hellohello;