import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// https://randomuser.me/api

function App() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("");
  const [userPicture, setUserPicture] = useState("");
  useEffect(() => {
    axios
      .get("https://randomuser.me/api")
      .then(({ data: { results } }) => {
        console.log(results[0]);
        setUserName(`${results[0].name.first} ${results[0].name.last}`);
        setUserPicture(results[0].picture.large);
      })
      .catch((error) => error);
  }, []);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Counter is at: {counter}</h1>
      <h2>
        <button onClick={handleClick}>Increment</button>
      </h2>
      <p>
        <span>Name:</span>
        <span>{userName}</span>
      </p>
      <p>
        <img src={userPicture} alt="user" />
      </p>
    </div>
  );
}

export default App;
