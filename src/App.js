import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const getAppData = async () => {
    console.log("getAppData called");
    const response = await fetch("http://localhost:3001/api");
    console.log("response=" + response);
    const resJSON = await response.json();
    console.log("message=" + resJSON.message);
    setData(resJSON.message);
  };

  useEffect(() => {
    getAppData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
