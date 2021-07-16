import { RECEIVE_QUESTIONS } from "./ActionTypes";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
