import { RECEIVE_USERS } from "./ActionTypes";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
