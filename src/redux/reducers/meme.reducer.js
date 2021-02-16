import * as types from "../constants/meme.constants";

const initialState = {
  memes: [],
  totalPageNum: 1,
  loading: false,
};

const memeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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
    default:
      return state;
  }
};

export default memeReducer;
