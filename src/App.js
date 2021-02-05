import "./App.css";
import React, { useState, useEffect } from "react";
import MemeUploadBar from "./components/MemeUploadBar";
import MemeList from "./components/MemeList";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
console.log("BACKEND_API", BACKEND_API);

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${BACKEND_API}/api/memes`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data.data", data.data);
      if (data && data.data) {
        setMemes(data.data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <MemeUploadBar />
      <MemeList memes={memes} />
    </div>
  );
}

export default App;
