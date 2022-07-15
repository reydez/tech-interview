const initialState = {
  items: [],
  details: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "GET_ITEM":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};
