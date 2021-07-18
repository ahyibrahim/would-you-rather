import {SET_IS_LOADING, SET_IS_NOT_LOADING} from "./ActionTypes";

export function setIsLoading() {
  return {
    type: SET_IS_LOADING,
  };
}

export function setIsNotLoading() {
  return {
    type: SET_IS_NOT_LOADING,
  };
}
