import { receiveUsersFail, receiveUsersSuccess } from "./UserActions";
import {
  receiveQuestionsSuccess,
  receiveQuestionsFail,
} from "./QuestionActions";
import { setIsNotLoading } from "./WidgetsActions";
import { getInitialQuestions, getInitialUsers } from "../../Utils/api";
import { unauth } from "./AuthedUserActions";

export function handleLogout(onSuccess) {
  return (dispatch) => {
    dispatch(unauth());
    onSuccess();
  };
}

export function handleInitUsers() {
  return (dispatch) => {
    getInitialUsers()
      .then((users) => {
        if (users) {
          dispatch(receiveUsersSuccess(users));
        } else {
          dispatch(receiveUsersFail());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveUsersFail());
      })
      .finally(() => {
        dispatch(setIsNotLoading());
      });
  };
}

export function handleInitQuestions() {
  return (dispatch) => {
    getInitialQuestions()
      .then((questions) => {
        if (questions) {
          dispatch(receiveQuestionsSuccess(questions));
        } else {
          dispatch(receiveQuestionsFail());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveQuestionsFail());
      });
  };
}
