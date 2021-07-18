import * as Actions from "../Actions/ActionTypes";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  switch (action.type) {
    case Actions.RECEIVE_USERS_SUCCESS:
      console.log(`User IDs: ${Object.keys(action.payload)}`);
      break;
    case Actions.RECEIVE_QUESTIONS_SUCCESS:
      console.log(`Question IDs: ${Object.keys(action.payload)}`);
      break;
    case Actions.SET_AUTHED_USER:
      console.log(`Auth-User ID: ${action.payload}`);
      break;
    default:
      console.log(`Action Received: ${action.type}`);
  }
  const returnValue = next(action);
  //console.log(`New State ${JSON.stringify(store.getState())}`);
  console.groupEnd();
  return returnValue;
};

export default logger;
