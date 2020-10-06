const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  quiz: null,
  round: null,
  answers: null,
  quizzes: null,
  quizDetails: null,
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
    case "ROUND_ADDED":
      return {
        ...state,
        quizDetails: {
          ...state.quizDetails,
          rounds: state.quizDetails.rounds.concat(action.payload),
        },
      };
    case "ANSWER_ADDED":
      return {
        ...state,
        answers: action.payload,
      };

    case "FETCH_QUIZZES":
      return {
        ...state,
        quizzes: action.payload,
      };
    case "FETCH_QUIZ":
      return {
        ...state,
        quizDetails: action.payload,
      };
    default:
      return state;
  }
}
