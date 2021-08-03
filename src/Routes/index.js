import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import { Route, Redirect, useLocation, useHistory } from "react-router-dom";
import LoginView from "../Views/LoginView";
import { unauthTo } from "../Store/Actions/AuthedUserActions";

const Routes = (props) => {
  // conditionally route based on the token value
  const { isAuthed, dispatch } = props;
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const shouldRedirect = location.pathname !== "/login";
    console.log(shouldRedirect, location.pathname);
    if (shouldRedirect) {
      dispatch(unauthTo(location.pathname));
    }
    console.log(location);
  }, []);

  useEffect(() => {
    if (isAuthed) {
      history.replace(props.redirr);
    }
  }, [isAuthed]);

  return isAuthed ? (
    <ProtectedRoutes />
  ) : (
    <>
      <Route path="/login" component={LoginView} />
      <Redirect to="/login" />
    </>
  );
};

function mapStateToProps({ authedUserReducer }) {
  return {
    ...authedUserReducer,
  };
}

export default connect(mapStateToProps)(Routes);
