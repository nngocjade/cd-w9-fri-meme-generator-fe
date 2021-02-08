import React, { useState } from "react";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const MemeUploadBar = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [texts, setTexts] = useState([]);

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
    const tempText = {};
    tempText.content = texts;
    tempText.size = 32;
    tempText.color = "WHITE";
    tempText.alignmentX = "HORIZONTAL_ALIGN_CENTER";
    tempText.alignmentY = "VERTICAL_ALIGN_TOP";

    const tempText2 = {};
    tempText2.content = texts;
    tempText2.size = 32;
    tempText2.color = "WHITE";
    tempText2.alignmentX = "HORIZONTAL_ALIGN_CENTER";
    tempText2.alignmentY = "VERTICAL_ALIGN_BOTTOM";

    formData.append("texts", JSON.stringify(tempText));
    formData.append("texts", JSON.stringify(tempText2));
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
          onChange={(e) => setTexts(e.target.value)}
          value={texts}
        />
        <input type="submit" value="Upload Meme" />
      </form>
    </div>
  );
};

export default MemeUploadBar;
