import React, { useState } from 'react';
import './App.css';

import Box from "./components/Box";


function App() {
  const [boxes, setBoxes] = useState([]);

  function newBox(newBox) {
    setBoxes([...boxes, newBox]);
  }

  return (
    <div className="App">
     <Box boxes={boxes} setBoxes={setBoxes}
       />

    <div style={{ display: "flex" }}>
      {boxes.map((color, i) => {
          return (
          <div 
          key={i}
          style={{
            backgroundColor :color,
            width: 200,
            height: 200,
            marginRight: 10,
          }}
          ></div>
          );
        })}
    </div>

    </div>
  );
  }


export default App;
