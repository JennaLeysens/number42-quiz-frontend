const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  quiz: null,
  round: null,
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
      console.log(action.payload);
      return {
        ...state,
        quiz: action.payload,
      };
    case "ROUND_ADDED":
      console.log("round reducer", action.payload);
      return {
        ...state,
        round: action.payload,
      };
    default:
      return state;
  }
}
