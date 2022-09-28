import React from "react";
import { useAuthContext } from "../../utils/AuthContext";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useAuthContext();

  return !currentUser ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
