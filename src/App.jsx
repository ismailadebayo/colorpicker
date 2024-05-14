import React, { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("");

  function handleChangeColor(event) {
    setColor(event.target.value);
  
  }

  return (
    <div className="container">
      <h1>Color picker</h1>
      <div className="color-div" style={{ background: color }}>
        <p>Selected colour: {color}</p>
      </div>
      <div className="select">
        <h4>Select a color:</h4>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>
    </div>
  );
}

export default App;
