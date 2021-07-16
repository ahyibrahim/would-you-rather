import { SET_AUTHED_USER } from "../Actions/ActionTypes";

const initialSate = { authedUser: null };

export const authedUserReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return;
      action.payload;
    default:
      return initialSate;
  }
};
