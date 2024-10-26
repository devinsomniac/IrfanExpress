// AuthContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userId,setUserId] = useState(null)
  // Check authentication when the app loads
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/check', {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.authenticated);
        setUserId(response.data.userId)
      } catch (err) {
        setIsAuthenticated(false);  // Set to false if there's an error
        console.error("Authentication error:", err);
        setUserId(null)
      }
    };
    checkAuth();
  }, []);

  const logOut = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/logout', null, {
        withCredentials: true,
      });
      setIsAuthenticated(false);  // Update state to reflect logout
      setUserId(null)
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // Provide the state and functions to children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logOut,userId ,setUserId}}>
      {children}
    </AuthContext.Provider>
  );
};
