import React, { useState } from "react";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const MemeUploadBar = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [topText, setTopText] = useState("");

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("please select a file");
    }
    const formData = new FormData();
    formData.append("image", file);
    formData.append("topText", topText);
    const response = await fetch(`${BACKEND_API}/api/memes`, {
      method: "POST",
      body: formData,
    });
    console.log("response", response);
    onUpload();
  };
  return (
    <div>
      <h2>Upload a new Meme</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={onFileChange} />
        <input
          type="text"
          onChange={(e) => setTopText(e.target.value)}
          value={topText}
        />
        <input type="submit" value="Upload Meme" />
      </form>
    </div>
  );
};

export default MemeUploadBar;
