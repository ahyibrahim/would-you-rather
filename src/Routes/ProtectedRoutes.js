import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Question_View from "../Views/QuestionView";
import HomePage from "../Views/HomePage";
import PageNotFound from "../Views/PageNotFound";

function ProtectedRoutes() {
  return (
    <Switch>
      <Route path="/question/:id" component={Question_View} />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" render={() => <Redirect to="/" />} />
      <Route path="/404" component={PageNotFound} />
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default ProtectedRoutes;
