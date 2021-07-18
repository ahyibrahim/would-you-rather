import {CLEAN_QUESTIONS, RECEIVE_QUESTIONS_SUCCESS} from "../Actions/ActionTypes";

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
  }
};
