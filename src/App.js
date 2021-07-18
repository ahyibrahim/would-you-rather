import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { handleDataInit } from "./Store/Actions/SharedActions";
import LoginView from "./Views/LoginView";
import homePage from "./Views/HomePage";

function App(props) {
  useEffect(() => {
    const { dispatch } = props;
    handleDataInit(dispatch);
    console.log(`App Props ${JSON.stringify(props)}`);
  }, []);

  return (
    <BrowserRouter>
      {!props.authedUser ? <Redirect to="/login" /> : <Redirect to="/" />}
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/" component={homePage} />
      </Switch>
    </BrowserRouter>
  );
}

function mapStateToProps({ authedUserReducer }) {
  //console.log(`UthedUser in App: ${JSON.stringify(authedUserReducer)}`);
  return authedUserReducer;
}

export default connect(mapStateToProps)(App);
