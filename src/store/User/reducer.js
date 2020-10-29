import { bindActionCreators } from "redux";

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
        quizzes: state.quizzes.concat(action.payload),
      };

    case "FETCH_QUIZ":
      console.log("quiz re", action.payload);
      return {
        ...state,
        quizDetails: action.payload,
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
        quizDetails: {
          ...state.quizDetails,
          rounds: state.quizDetails.rounds.map((round) => {
            return {
              ...round,
              answers:
                round.id === action.payload.roundId
                  ? (round.answers || []).concat(action.payload)
                  : round.answers,
            };
          }),
        },
      };

    case "UPDATE_ANSWER":
      return {
        ...state,
        quizDetails: {
          ...state.quizDetails,
          rounds: state.quizDetails.rounds.map((round) => {
            return {
              ...round,
              answers: round.answers.map((answer) => {
                return answer.id === action.payload.id
                  ? action.payload
                  : answer;
              }),
            };
          }),
        },
      };

    case "DELETE_QUIZ": {
      const quizId = action.payload.id;
      const newQuizzes = state.quizzes.filter((quiz) => quiz.id !== quizId);
      return {
        ...state,
        quizzes: newQuizzes,
      };
    }

    case "FETCH_QUIZZES":
      console.log("REDUCER?", action.payload);
      return {
        ...state,
        quizzes: action.payload,
      };

    default:
      return state;
  }
}
