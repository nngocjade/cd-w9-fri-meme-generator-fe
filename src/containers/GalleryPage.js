import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memeActions } from "../redux/actions/index";
import PaginationBar from "../components/PaginationBar";
import { Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import MemeList from "../components/MemeList";

const GalleryPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.meme.loading);
  const totalPageNum = useSelector((state) => state.meme.totalPageNum);
  const memes = useSelector((state) => state.meme.memes);
  console.log("memes:", memes);
  console.log(totalPageNum);
  useEffect(() => {
    dispatch(memeActions.memesRequest(pageNum));
  }, [dispatch, pageNum]);

  const showDetail = () => {};

  return (
    <Container>
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPageNum}
        loading={loading}
      />
      <Row className="d-flex justify-content-center align-items-center">
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <>
            <MemeList memes={memes} showDetail={showDetail} />
          </>
        )}
      </Row>
    </Container>
  );
};

export default GalleryPage;
