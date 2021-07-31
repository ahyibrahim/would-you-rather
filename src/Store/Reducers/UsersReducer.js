import {
  CLEAR_USERS,
  RECEIVE_ANSWER_SUCCESS,
  RECEIVE_USERS_SUCCESS,
  USER_ADDED_QUESTION_SUCESS,
} from "../Actions/ActionTypes";

const initialSate = {};

export const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case CLEAR_USERS:
      return initialSate;
    case RECEIVE_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case RECEIVE_ANSWER_SUCCESS:
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          answers: {
            ...state[action.payload.userId].answers,
            [action.payload.questionId]: action.payload.answer,
          },
        },
      };
    case USER_ADDED_QUESTION_SUCESS:
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          questions: state[action.payload.userId].questions.concat([
            action.payload.questionId,
          ]),
        },
      };
    default: {
      return state;
    }
  }
};
