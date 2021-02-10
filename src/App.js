import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImage, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
// import React, { useState, useEffect } from "react";
// import MemeUploadBar from "./components/MemeUploadBar";
// import MemeList from "./components/MemeList";

// const BACKEND_API = process.env.REACT_APP_BACKEND_API;
// console.log("BACKEND_API", BACKEND_API);

library.add(faImage, faPlusSquare);

function App() {
  // const [memes, setMemes] = useState([]);
  // const [refresh, setRefresh] = useState(false);

  // const handleUpload = () => {
  //   setRefresh(true);
  // }; //this handles auto refresh when a new meme is added

  // useEffect(() => {
  //   async function fetchData() {
  //     const url = `${BACKEND_API}/api/memes`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log("data", data);
  //     console.log("data.data", data.data);
  //     if (data && data.data) {
  //       setMemes(data.data);
  //     }
  //     setRefresh(false);
  //   }
  //   fetchData();
  // }, [refresh]);

  return (
    <div className="App">
      {/* <MemeUploadBar onUpload={handleUpload} />
      <MemeList memes={memes} /> */}
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
