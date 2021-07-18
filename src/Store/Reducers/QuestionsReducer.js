import { RECEIVE_QUESTIONS } from "../Actions/ActionTypes";

const initialSate = {};

export const questionReducer = (state = initialSate, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
