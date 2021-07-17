import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleDataInit } from "./Store/Actions/SharedActions";
import LoginView from "./Views/LoginView";

function App(props) {
  useEffect(() => {
    const { dispatch } = props;
    handleDataInit(dispatch);
  }, []);

  return <LoginView />;
}

export default connect()(App);
