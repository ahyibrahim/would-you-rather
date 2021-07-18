import "./App.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { handleDataInit } from "./Store/Actions/SharedActions";
import LoginView from "./Views/LoginView";
import HomePage from "./Views/HomePage";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      const { dispatch } = props;
      handleDataInit(dispatch);
      setIsLoggedIn(true);
      console.log(`App Props ${JSON.stringify(props)}`);
    } else {
      console.log("Skipped Init");
    }
  }, []);

  return (
    <BrowserRouter>
      {!props.isAuthed ? <Redirect to="/login" /> : <Redirect to="/" />}
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route path="/login" render={() => <LoginView />} />
    //       <Route exact path="/" render={() => <HomePage />} />
    //     </Switch>
    //   </BrowserRouter>
  );
}

function mapStateToProps({ authedUserReducer }) {
  console.log(`UthedUser in App: ${JSON.stringify(authedUserReducer)}`);
  return authedUserReducer;
}

export default connect(mapStateToProps)(App);
