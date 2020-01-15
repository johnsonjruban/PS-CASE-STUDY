export const fetchSuccess = response => {
  return {
    type: "FETCH_SUCCESS",
    payload: response.data
  };
};

export const fetchFailure = error => {
  return {
    type: "FETCH_FAILURE",
    payload: error
  };
};
