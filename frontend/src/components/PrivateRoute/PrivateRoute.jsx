import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = (props) => {
  const condition = localStorage.getItem("token");

  return condition ? (
    <Route path={props.path} exact={props.exact}>
      <props.component />
    </Route>
  ) : (
    <Redirect to={props.to} />
  );
};

export default PrivateRoute;
