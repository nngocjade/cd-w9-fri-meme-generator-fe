import "./App.css";
import React, { useState, useEffect } from "react";
import MemeUploadBar from "./components/MemeUploadBar";
import MemeList from "./components/MemeList";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
console.log("BACKEND_API", BACKEND_API);

function App() {
  const [memes, setMemes] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleUpload = () => {
    setRefresh(true);
  }; //this handles auto refresh when a new meme is added

  useEffect(() => {
    async function fetchData() {
      const url = `${BACKEND_API}/api/memes`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);
      console.log("data.data", data.data);
      if (data && data.data) {
        setMemes(data.data);
      }
      setRefresh(false);
    }
    fetchData();
  }, [refresh]);

  return (
    <div className="App">
      <MemeUploadBar onUpload={handleUpload} />
      <MemeList memes={memes} />
    </div>
  );
}

export default App;
