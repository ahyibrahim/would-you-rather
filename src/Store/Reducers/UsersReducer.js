import {RECEIVE_USERS_SUCCESS} from "../Actions/ActionTypes";

const initialSate = {};

export const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case RECEIVE_USERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
