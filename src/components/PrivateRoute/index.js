import React from "react";
import { Route } from "react-router-dom";
import { useAuthContext } from "../../utils/AuthContext";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const currentUser = useAuthContext();

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return currentUser.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
