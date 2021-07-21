import {
  RECEIVE_ANSWER_SUCCESS,
  RECEIVE_USERS_SUCCESS,
} from "../Actions/ActionTypes";

const initialSate = {};

export const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case RECEIVE_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case RECEIVE_ANSWER_SUCCESS:
      let mutatedState = JSON.parse(JSON.stringify(state));
      let modUser = mutatedState[action.payload.userId];

      modUser.answers[action.payload.questionId] = action.payload.answer;
      Object.assign(mutatedState[action.payload.userId], modUser);
      console.log(`U*U** mutatedState: ${JSON.stringify(mutatedState)}`);
      return { ...mutatedState };
    default: {
      return state;
    }
  }
};
