import { getInitialData } from "../../Utils/api";
import { receiveUsers } from "./UserActions";
import { receiveQuestions } from "./QuestionActions";
import { setAuthedUser } from "./AuthedUserActions";

export function handelDataInit() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser());
    });
  };
}
