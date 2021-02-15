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
      console.log("payload ", payload);
      return {
        ...state,
        memes: payload,
        totalPageNum: payload,
        loading: false,
      };
    case types.GET_MEMES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default memeReducer;
