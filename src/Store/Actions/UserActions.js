import {
  RECEIVE_USERS_SUCCESS,
  RECEIVE_USERS_FAIL,
  RECEIVE_ANSWER_SUCCESS,
  RECEIVE_ANSWER_FAIL,
  USER_ADDED_QUESTION_SUCESS,
  USER_ADDED_QUESTION_FAIL,
  CLEAR_USERS,
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

export function userAddedQuestionSuccess(userId, questionId) {
  return {
    type: USER_ADDED_QUESTION_SUCESS,
    payload: { userId, questionId },
  };
}

export function userAddedQuestionFail() {
  return {
    type: USER_ADDED_QUESTION_FAIL,
  };
}

export function clearUsers() {
  return {
    type: CLEAR_USERS,
  };
}
