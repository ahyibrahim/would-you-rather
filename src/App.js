import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import {
  handleInitQuestions,
  handleInitUsers,
} from "./Store/Actions/SharedActions";
import LoginView from "./Views/LoginView";
import { cleanQuestions } from "./Store/Actions/QuestionActions";
import { setIsLoading, setIsNotLoading } from "./Store/Actions/WidgetsActions";
import NavBar from "./Components/NavBar";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

function App(props) {
  const { isAuthed, dispatch, questionReducer, userReducer } = props;

  useEffect(() => {
    if (!Object.values(userReducer).length) {
      dispatch(setIsLoading());
      dispatch(handleInitUsers());
    }
  }, []);

  useEffect(() => {
    if (!Object.values(questionReducer).length) {
      dispatch(setIsLoading());
      if (isAuthed) {
        dispatch(handleInitQuestions());
      } else {
        dispatch(cleanQuestions());
        dispatch(setIsNotLoading());
      }
    }
  }, [isAuthed]);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {props.isAuthed ? (
          <ProtectedRoutes />
        ) : (
          <>
            <Route path="/login" component={LoginView} />
            <Redirect to="/login"></Redirect>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

function mapStateToProps({ authedUserReducer, questionReducer, userReducer }) {
  //console.log(`AuthedUser in App: ${JSON.stringify(authedUserReducer)}`);
  return {
    ...authedUserReducer,
    questionReducer,
    userReducer,
  };
}

export default connect(mapStateToProps)(App);
