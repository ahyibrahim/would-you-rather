import { getInitialData } from "../../Utils/api";
import { receiveUsers } from "./UserActions";
import { receiveQuestions } from "./QuestionActions";
import { unauth } from "./AuthedUserActions";

export function handleDataInit(dispatch) {
  return getInitialData().then(({ users, questions }) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(unauth());
  });
}
