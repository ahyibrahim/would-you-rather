import { SET_AUTHED_USER } from "./ActionTypes";

export function setAuthedUser(userID = undefined) {
  return {
    type: SET_AUTHED_USER,
    userID,
  };
}
