import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authedUserReducer } from "./Reducers/AuthedUserReducer";
import { questionReducer } from "./Reducers/QuestionsReducer";
import { userReducer } from "./Reducers/UsersReducer";
import middleware from "./Middleware";
import { widgetsReducer } from "./Reducers/WidgetsReducer";

const rootReducer = combineReducers({
  userReducer,
  questionReducer,
  authedUserReducer,
  widgetsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

//export const store = createStore(rootReducer, middleware);
