import React from "react";
import { CardColumns, Card } from "react-bootstrap";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const MemeList = ({ memes, showDetail }) => {
  return (
    <div>
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
    </div>
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
        src={`${process.env.REACT_APP_BACKEND_API}/${
          meme.outputMemePath.split("public/")[1]
        }?${meme.updatedAt}`}
        // src={`${BACKEND_API}${meme.outputMemePath.slice(6)}`}
      />
    </Card>
  );
};

export default MemeList;
