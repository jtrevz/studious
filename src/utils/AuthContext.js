import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const register = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = async (email, password) => {};
  const logout = async () => {};

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsuscribe;
  });

  const value = { currentUser, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
