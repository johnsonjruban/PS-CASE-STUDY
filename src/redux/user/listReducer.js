const initialState = {
  loading: true,
  error: "",
  data: {}
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: ""
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default listReducer;
