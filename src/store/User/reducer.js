const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  quiz: null,
};

export default function userSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN-SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload, errorMessage: null };
    case "TOKEN_STILL_VALID":
      return { ...state, ...action.payload };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    case "QUIZ_ADDED":
      return {
        ...state,
        quiz: action.payload,
      };
    default:
      return state;
  }
}
