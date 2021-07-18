import { createStore, combineReducers } from "redux";
import { authedUserReducer } from "./Reducers/AuthedUserReducer";
import { questionReducer } from "./Reducers/QuestionsReducer";
import { userReducer } from "./Reducers/UsersReducer";
import middleware from "./Middleware";
import {widgetsReducer} from "./Reducers/WidgetsReducer";

const rootReducer = combineReducers({
  userReducer,
  questionReducer,
  authedUserReducer,
  widgetsReducer
});

export const store = createStore(rootReducer, middleware);
