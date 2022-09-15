import React from "react";
import { Route } from "react-router-dom";
import { useAuthContext } from "../../utils/AuthContext";

import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Navigate replace to="/login" />
        );
      }}
    ></Route>
  );
}
