import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// https://randomuser.me/api

function App() {
  const [counter, setCounter] = useState(0);
  const [userData, setUserData] = useState([]);
  const handleClick = () => {
    setCounter(counter + 1);
    fetchData(`https://randomuser.me/api?page={counter}`);
  };

  useEffect(() => {
    fetchData("https://randomuser.me/api");
  }, []);

  const fetchData = async (url) => {
    const { data } = await axios.get(url);
    try {
      const results = data.results;
      console.log(data);
      setUserData([
        ...userData,
        {
          name: `${results[0].name.first} ${results[0].name.last}`,
          link: results[0].picture.large,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Counter is at: {counter}</h1>
      <h2>
        <button onClick={handleClick}>Increment</button>
      </h2>

      {userData.map((user) => (
        <div>
          <p>
            <span>Name:</span>
            <span>{user.name}</span>
          </p>
          <p>
            <img src={user.link} alt="user" />
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
