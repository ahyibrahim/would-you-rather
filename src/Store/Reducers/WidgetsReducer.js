import {SET_IS_NOT_LOADING, SET_IS_LOADING} from "../Actions/ActionTypes";

const initialSate = {
  isLoading: false
};

export const widgetsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SET_IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
};
