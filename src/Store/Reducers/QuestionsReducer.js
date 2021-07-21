import {
  CLEAN_QUESTIONS,
  RECEIVE_QUESTIONS_SUCCESS,
  RECEIVE_VOTE_SUCCESS,
} from "../Actions/ActionTypes";

const initialSate = {};

export const questionReducer = (state = initialSate, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAN_QUESTIONS:
      return initialSate;
    default: {
      return state;
    }
    case RECEIVE_VOTE_SUCCESS:
      let question = state[action.payload.questionId];
      question[action.payload.answer].votes.push(action.payload.userId);
      let mutatedState = JSON.parse(JSON.stringify(state));
      Object.assign(mutatedState[action.payload.questionId], question);
      return {
        ...mutatedState,
      };
  }
};
