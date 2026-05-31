import React, { createContext, useContext, useState } from 'react';

// Simple in-memory auth context (replace with real auth later)
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  const login  = (name) => setUser({ name });
  const logout = ()      => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
