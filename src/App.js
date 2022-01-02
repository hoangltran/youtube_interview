import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Counter is at: {counter}</h1>
      <h2>
        <button onClick={handleClick}>Increment</button>
      </h2>
    </div>
  );
}

export default App;
