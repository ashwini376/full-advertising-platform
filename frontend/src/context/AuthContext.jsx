import React, { createContext, useContext, useState, useEffect } from 'react';
import { login, register } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUser(decoded);
    }
  }, []);

  // Login function
  const signIn = async (credentials) => {
    const response = await login(credentials);
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  // Register function
  const signUp = async (userData) => {
    const response = await register(userData);
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  // Logout function
  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);