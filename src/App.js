import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import {
  handleInitQuestions,
  handleInitUsers,
} from "./Store/Actions/SharedActions";
import LoginView from "./Views/LoginView";
import HomePage from "./Views/HomePage";
import { cleanQuestions } from "./Store/Actions/QuestionActions";
import { setIsLoading } from "./Store/Actions/WidgetsActions";

function App(props) {
  const { isAuthed, dispatch } = props;

  useEffect(() => {
    dispatch(setIsLoading());
    dispatch(handleInitUsers());
  }, []);

  useEffect(() => {
    if (isAuthed) {
      dispatch(handleInitQuestions());
    } else {
      dispatch(cleanQuestions());
    }
  }, [isAuthed]);

  return (
    <BrowserRouter>
      {!props.isAuthed ? <Redirect to="/login" /> : <Redirect to="/" />}
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

function mapStateToProps({ authedUserReducer }) {
  console.log(`AuthedUser in App: ${JSON.stringify(authedUserReducer)}`);
  return {
    ...authedUserReducer,
  };
}

export default connect(mapStateToProps)(App);
