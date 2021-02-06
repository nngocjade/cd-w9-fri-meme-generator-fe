import React from "react";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const MemeList = ({ memes }) => {
  return (
    <div>
      <h1>All Memes</h1>
      {memes.map((m) => (
        <div key={m.id}>
          <img src={`${BACKEND_API}${m.outputMemePath.slice(6)}`} alt="meme" />
        </div>
      ))}
    </div>
  );
};

export default MemeList;
