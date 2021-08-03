import { UNAUTH_TO, SET_AUTHED_USER, UNAUTH } from "../Actions/ActionTypes";

const initialSate = { authedUser: null, isAuthed: false, redirr: "/" };

export const authedUserReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        authedUserId: action.payload,
        isAuthed: true,
      };
    case UNAUTH:
      return { authedUser: undefined, isAuthed: false };
    case UNAUTH_TO:
      return {
        authedUser: undefined,
        isAuthed: false,
        redirr: action.payload,
      };
    default:
      return state;
  }
};
