import { RECEIVE_QUESTIONS_SUCCESS, RECEIVE_QUESTIONS_FAIL, CLEAN_QUESTIONS } from "./ActionTypes";

export function receiveQuestionsSuccess(questions) {
  return {
    type: RECEIVE_QUESTIONS_SUCCESS,
    payload: questions,
  };
}
export function receiveQuestionsFail() {
  return {
    type: RECEIVE_QUESTIONS_FAIL
  };
}
export function cleanQuestions() {
  return {
    type: CLEAN_QUESTIONS
  };
}
