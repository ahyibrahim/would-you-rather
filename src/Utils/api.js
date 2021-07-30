import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "./_DATA";

export function getInitialUsers() {
  return _getUsers();
}

export function getInitialQuestions() {
  return _getQuestions();
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function saveQuestion(optionOneText, optionTwoText, author) {
  return _saveQuestion({
    optionOneText: optionOneText,
    optionTwoText: optionTwoText,
    author: author,
  });
}
