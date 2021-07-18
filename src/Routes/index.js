import React from "react";
import { connect } from "react-redux";
import PrivateRoutes from "./PrivateRoute";
import PublicRoutes from "./PublicRoute";

const AuthorizationContext = React.createContext();

const Routes = (props) => {
  // conditionally route based on the token value

  return <div>{props.token ? <PrivateRoute /> : <PublicRoute />}</div>;
};

function mapStateToProps({ authUserReducer }) {
  return authUserReducer;
}

export default connect(mapStateToProps)(Routes);
