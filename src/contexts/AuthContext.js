import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChange } from '../firebase/auth';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
      setError(null);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    error,
    setError,
    isAuthenticated: !!user,
    userEmail: user?.email,
    userName: user?.displayName || user?.email?.split('@')[0],
    userPhoto: user?.photoURL
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};