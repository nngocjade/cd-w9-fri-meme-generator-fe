import * as types from "../constants/meme.constants";

const initialState = {
  memes: [],
  totalPageNum: 1,
  loading: false,
};

const memeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // GET MEME
    case types.GET_MEMES_REQUEST:
      return { ...state, loading: true };
    case types.GET_MEMES_SUCCESS:
      console.log("payload.data ", payload.data);
      console.log("payload.totalPages ", payload.totalPages);
      return {
        ...state,
        memes: payload.data,
        totalPageNum: payload.totalPages,
        loading: false,
      };
    case types.GET_MEMES_FAILURE:
      return { ...state, loading: false };
    // CREATE MEME
    case types.CREATE_MEME_REQUEST:
      return { ...state, loading: true };
    // update - request
    case types.UPDATE_MEME_REQUEST:
      return { ...state, loading: true };
    // CREATE - SUCCESS
    case types.CREATE_MEME_SUCCESS:
      return {
        ...state,
        selectedMeme: {
          ...state.selectedMeme,
          ...payload,
          localImageUrl: `${process.env.REACT_APP_BACKEND_API}/${
            payload.outputMemePath.split("public/")[1]
          }?${payload.updatedAt}`,
        },
        loading: false,
      };
    // update - success
    case types.UPDATE_MEME_SUCCESS:
      return {
        ...state,
        selectedMeme: {
          ...state.selectedMeme,
          ...payload,
          localImageUrl: `${process.env.REACT_APP_BACKEND_API}/${
            payload.outputMemePath.split("public/")[1]
          }?${payload.updatedAt}`,
        },
        loading: false,
      };
    // CREATE - FAILURE
    case types.CREATE_MEME_FAILURE:
      return { ...state, loading: false };
    // update - failure
    case types.UPDATE_MEME_FAILURE:
      return { ...state, loading: false };
    // SET SELECTED MEME
    case types.SET_SELECTED_MEME:
      return { ...state, selectedMeme: payload };

    default:
      return state;
  }
};

export default memeReducer;
