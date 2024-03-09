import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState("Square");

  function handleClick() {
    setShapes([...shapes, selectedShape.toLowerCase()]);
    // lowerCase is done in order to match it with the class names
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select
          onChange={(event) => setSelectedShape(event.target.value)}
          value={selectedShape}
        >
          <option>Square</option>
          <option>Circle</option>
        </select>
        <button onClick={handleClick}>Add Shape</button>
      </div>

      <div id="shapes-holder">
        {shapes.map((shape, id) => (
          <div className={shape} key={id}>
            {id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
