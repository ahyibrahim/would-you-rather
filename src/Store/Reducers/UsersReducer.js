import { RECEIVE_USERS } from "../Actions/ActionTypes";

const initialSate = { users: [] };

export const userReducer = (state = initialSate, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return initialSate;
  }
};
