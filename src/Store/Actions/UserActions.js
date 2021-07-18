import { RECEIVE_USERS_SUCCESS, RECEIVE_USERS_FAIL } from "./ActionTypes";

export function receiveUsersSuccess(users) {
  return {
    type: RECEIVE_USERS_SUCCESS,
    payload: users,
  };
}

export function receiveUsersFail() {
  return {
    type: RECEIVE_USERS_FAIL
  };
}
