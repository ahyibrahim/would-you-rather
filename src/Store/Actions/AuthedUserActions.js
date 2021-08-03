import { UNAUTH_TO, SET_AUTHED_USER, UNAUTH } from "./ActionTypes";

export function setAuthedUser(userID = undefined) {
  return {
    type: SET_AUTHED_USER,
    payload: userID,
  };
}

export function unauth() {
  return {
    type: UNAUTH,
  };
}

export function unauthTo(to) {
  return {
    type: UNAUTH_TO,
    payload: to,
  };
}
