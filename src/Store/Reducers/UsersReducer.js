import { GET_USERNAMES, RECEIVE_USERS } from "../Actions/ActionTypes";

const initialSate = {};

export const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.payload,
      };
      break;
    default: {
      return state;
    }
  }
};
