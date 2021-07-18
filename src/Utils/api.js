import { _getUsers, _getQuestions } from "./_DATA";

/*export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}*/

export function getInitialUsers() {
  return _getUsers();
}

export function getInitialQuestions() {
  return _getQuestions();
}