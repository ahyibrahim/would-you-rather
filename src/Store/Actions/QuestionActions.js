import {
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_QUESTIONS_FAIL,
  CLEAN_QUESTIONS,
  RECEIVE_VOTE_SUCCESS,
  RECEIVE_VOTE_FAIL,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAIL,
} from "./ActionTypes";

export function receiveQuestionsSuccess(questions) {
  return {
    type: RECEIVE_QUESTIONS_SUCCESS,
    payload: questions,
  };
}
export function receiveQuestionsFail() {
  return {
    type: RECEIVE_QUESTIONS_FAIL,
  };
}
export function cleanQuestions() {
  return {
    type: CLEAN_QUESTIONS,
  };
}

export function receiveVoteSuccesss(userId, questionId, answer) {
  return {
    type: RECEIVE_VOTE_SUCCESS,
    payload: { userId, questionId, answer },
  };
}

export function receiveVoteFail() {
  return {
    type: RECEIVE_VOTE_FAIL,
  };
}

export function addQuestionSuccess(question) {
  return {
    type: ADD_QUESTION_SUCCESS,
    payload: question,
  };
}

export function addQuestionFail() {
  return {
    type: ADD_QUESTION_FAIL,
  };
}
