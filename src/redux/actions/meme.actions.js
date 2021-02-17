import * as types from "../constants/meme.constants";
import api from "../api.js";
import { toast } from "react-toastify";

const memesRequest = (pageNum) => async (dispatch) => {
  dispatch({ type: types.GET_MEMES_REQUEST, payload: null });
  try {
    const res = await api.get(`/memes?page=${pageNum}&perPage=9`);
    console.log("api response: ", res);
    console.log("res.data:", res.data);
    dispatch({ type: types.GET_MEMES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.GET_MEMES_FAILURE, payload: error });
  }
};

const createMemeRequest = (image) => async (dispatch) => {
  dispatch({ type: types.CREATE_MEME_REQUEST, payload: null });
  try {
    const formData = new FormData();
    formData.append("image", image);
    const res = await api.post(`/memes`, formData);
    dispatch({
      type: types.CREATE_MEME_SUCCESS,
      payload: res.data.data,
    });
    toast.success("You can put your idea on the meme now!");
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_MEME_FAILURE, payload: error });
  }
};

const setSelectedMeme = (meme) => ({
  type: types.SET_SELECTED_MEME,
  payload: meme,
});

export const memeActions = {
  memesRequest,
  createMemeRequest,
  setSelectedMeme,
};
