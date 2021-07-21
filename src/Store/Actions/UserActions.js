import {
  RECEIVE_USERS_SUCCESS,
  RECEIVE_USERS_FAIL,
  RECEIVE_ANSWER_SUCCESS,
  RECEIVE_ANSWER_FAIL,
} from "./ActionTypes";

export function receiveUsersSuccess(users) {
  return {
    type: RECEIVE_USERS_SUCCESS,
    payload: users,
  };
}

export function receiveUsersFail() {
  return {
    type: RECEIVE_USERS_FAIL,
  };
}

export function receiveAnswerSuccess(userId, questionId, answer) {
  return {
    type: RECEIVE_ANSWER_SUCCESS,
    payload: { userId, questionId, answer },
  };
}

export function receiveAnswerFail() {
  return {
    type: RECEIVE_ANSWER_FAIL,
  };
}
