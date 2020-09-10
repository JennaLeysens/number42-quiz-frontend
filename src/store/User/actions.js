import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../User/selector";

export function userLoggedIn(data) {
  return { type: "LOGIN-SUCCESS", payload: data };
}

export function tokenStillValid(userWithoutToken) {
  return { type: "TOKEN_STILL_VALID", payload: userWithoutToken };
}

export function userLoggedOut() {
  return { type: "LOG_OUT" };
}

export function quizAdded(data) {
  return { type: "QUIZ_ADDED", payload: data };
}

export function roundAdded(data) {
  return { type: "ROUND_ADDED", payload: data };
}

export function login(email, password) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(userLoggedIn(response.data));
    } catch (error) {
      if (error.response) {
      } else {
        console.log(error.message);
      }
    }
  };
}

export function logOut() {
  return { type: "LOG_OUT" };
}

export function getUserWithStoredToken() {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    if (token === null) return;
    try {
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(tokenStillValid(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
    }
  };
}

export function signUp(name, email, password) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });
      dispatch(userLoggedIn(response.data));
    } catch (error) {
      if (error.response) {
      } else {
        console.log(error.message);
      }
    }
  };
}

export function addQuiz(editionNumber, date, teamMembers) {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    console.log("action");
    try {
      const response = await axios.post(
        `${apiUrl}`,
        {
          editionNumber,
          date,
          teamMembers,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(quizAdded(response.data));
      console.log("data", response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error.message);
      }
    }
  };
}

export function addRound(round) {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    console.log("action round");
    try {
      const response = await axios.post(
        `${apiUrl}/round`,
        {
          round,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(quizAdded(response.data));
      console.log("round", response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error.message);
      }
    }
  };
}
