const initialState = {
  albums: [],
  artists: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return { ...state, albums: action.payload };
    case "SET_ARTISTS":
      return { ...state, artists: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
