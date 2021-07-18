import { SET_AUTHED_USER, UNAUTH } from "../Actions/ActionTypes";

const initialSate = { authedUser: null, isAuthed: false };

export const authedUserReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return { authedUserId: action.payload, isAuthed: true };
    case UNAUTH:
      return { authedUser: undefined, isAuthed: false };
    default:
      return state;
  }
};
