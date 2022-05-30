import React, { createContext, useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import AuthForm from "./Auth/AuthForm";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    logout: () => {},
    toggleAuthDialog: () => {},
    setUser: () => {},
    openDialog: false,
    user: null,
  });

  const handleToggleAuthDialog = () => {
    setAuthState({ ...authState, openDialog: !authState.openDialog });
  };

  const handleSetUser = (user) => {
    setAuthState({ ...authState, user });
  };

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unlisten = onAuthStateChanged(auth, (authUser) => {
      authUser ? handleSetUser(authUser) : handleSetUser(null);
    });
    return () => {
      unlisten();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logout: handleLogout,
        toggleAuthDialog: handleToggleAuthDialog,
        setUser: handleSetUser,
        user: authState.user,
      }}
    >
      <>
        {children}
        <Dialog open={authState.openDialog} onClose={handleToggleAuthDialog}>
          <AuthForm />
        </Dialog>
      </>
    </AuthContext.Provider>
  );
};
