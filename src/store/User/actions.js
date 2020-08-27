import axios from "axios";
import { apiUrl } from "../../config/constants";

export function userLoggedIn(data) {
  return { type: "LOGIN-SUCCESS", payload: data };
}

export function tokenStillValid(userWithoutToken) {
  return { type: "TOKEN_STILL_VALID", payload: userWithoutToken };
}

export function userLoggedOut() {
  return { type: "LOG_OUT" };
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
