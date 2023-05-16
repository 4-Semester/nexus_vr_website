
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }
  const apiOptions = {
    url: "https://api.nexusvr.tech/users/me",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    }
  }

  async function isAuth() {
    try {
      const response = await axios(apiOptions);
      if (response.status === 200) {
        setUser(JSON.parse(JSON.stringify(response.data)));
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
      localStorage.removeItem("token");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    isAuth();
  }, [])


  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};
