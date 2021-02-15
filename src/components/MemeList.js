import React from "react";
import { CardColumns, Card } from "react-bootstrap";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const MemeList = ({ memes, showDetail }) => {
  return (
    <>
      {memes?.length > 0 ? (
        <CardColumns>
          <ul className="list-unstyled">
            {memes.map((meme) => (
              <MemeCard meme={meme} showDetail={showDetail} key={meme.id} />
            ))}
          </ul>
        </CardColumns>
      ) : (
        <p className="text-center">There are no memes</p>
      )}
    </>
  );
};

const MemeCard = ({ meme, showDetail }) => {
  return (
    <Card
      border="primary"
      className="mouse-hover"
      onClick={() => showDetail(meme)}
    >
      <Card.Img
        variant="top"
        src={`${BACKEND_API}/${meme.outputMemePath.split("public/")[1]}?${
          meme.updatedAt
        }`}
      />
    </Card>
  );
};

export default MemeList;
