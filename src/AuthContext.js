// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    // Perform authentication logic here, set isLoggedIn and isAdmin accordingly
    setIsLoggedIn(true);
    setIsAdmin(true); // For demonstration purposes, assuming the user is an admin after login
  };

  const logout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
