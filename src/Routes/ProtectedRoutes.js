import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Question_View from "../Views/QuestionView";
import HomePage from "../Views/HomePage";
import Page_Not_Found from "../Views/PageNotFound";

function ProtectedRoutes() {
  return (
    <Switch>
      <Route path="/question/:id" component={Question_View} />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" render={() => <div>User Already Logged In</div>} />
      <Route path="/404" component={Page_Not_Found} />
      <Route path="*">
        <Page_Not_Found />
      </Route>
    </Switch>
  );
}

export default ProtectedRoutes;
